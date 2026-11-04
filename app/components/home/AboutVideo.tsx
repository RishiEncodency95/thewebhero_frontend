'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Gauge, Loader2, Maximize, Minimize, Pause, Play, RotateCcw, Volume1, Volume2, VolumeX, X } from 'lucide-react';

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];
const HIDE_AFTER_MS = 2600;
const VOLUME_KEY = 'twh-video-volume';

/** Remembered volume/mute (private mode or blocked storage just means defaults). */
function loadVolume(): { volume: number; muted: boolean } {
    try {
        const raw = window.localStorage.getItem(VOLUME_KEY);
        if (raw) {
            const v = JSON.parse(raw);
            if (typeof v.volume === 'number') return { volume: Math.min(1, Math.max(0, v.volume)), muted: Boolean(v.muted) };
        }
    } catch { /* ignore */ }
    return { volume: 0.8, muted: false };
}

const fmt = (s: number) => {
    if (!Number.isFinite(s) || s < 0) return '0:00';
    const m = Math.floor(s / 60);
    return `${m}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
};

/** First-frame thumbnail for a Cloudinary video URL (so the player never opens on a black box). */
function posterFor(url?: string) {
    if (!url || !url.includes('res.cloudinary.com') || !url.includes('/video/upload/')) return undefined;
    return url.replace('/video/upload/', '/video/upload/so_3,w_1280,q_auto,f_jpg/').replace(/\.\w+$/, '.jpg');
}

/** Premium popup player: clean controls, seek bar, speed, fullscreen, keyboard shortcuts. */
function Player({ src, onClose }: { src: string; onClose: () => void }) {
    const box = useRef<HTMLDivElement>(null);
    const video = useRef<HTMLVideoElement>(null);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const [playing, setPlaying] = useState(false);
    const [ended, setEnded] = useState(false);
    const [waiting, setWaiting] = useState(true);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [buffered, setBuffered] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [menu, setMenu] = useState(false);
    const [full, setFull] = useState(false);
    const [showUi, setShowUi] = useState(true);
    const [hint, setHint] = useState<string | null>(null);
    const [{ volume, muted }, setSound] = useState(loadVolume);

    const wake = useCallback(() => {
        setShowUi(true);
        clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setShowUi(false), HIDE_AFTER_MS);
    }, []);

    const toggle = useCallback(() => {
        const v = video.current;
        if (!v) return;
        if (v.ended) v.currentTime = 0;
        if (v.paused) void v.play().catch(() => undefined);
        else v.pause();
        wake();
    }, [wake]);

    const seekBy = useCallback((delta: number) => {
        const v = video.current;
        if (!v) return;
        v.currentTime = Math.min(Math.max(0, v.currentTime + delta), v.duration || 0);
        setHint(delta > 0 ? `+${delta}s` : `${delta}s`);
        setTimeout(() => setHint(null), 600);
        wake();
    }, [wake]);

    const applySound = useCallback((next: { volume: number; muted: boolean }) => {
        const v = video.current;
        if (v) { v.volume = next.volume; v.muted = next.muted; }
        setSound(next);
        try { window.localStorage.setItem(VOLUME_KEY, JSON.stringify(next)); } catch { /* ignore */ }
    }, []);

    const toggleMute = useCallback(() => {
        const unmuting = muted || volume === 0;
        applySound({ volume: unmuting && volume === 0 ? 0.6 : volume, muted: !unmuting });
        setHint(unmuting ? 'Sound on' : 'Muted');
        setTimeout(() => setHint(null), 700);
        wake();
    }, [muted, volume, applySound, wake]);

    const toggleFull = useCallback(() => {
        const el = box.current;
        const v = video.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
        if (!el || !v) return;
        if (document.fullscreenElement) void document.exitFullscreen();
        else if (el.requestFullscreen) void el.requestFullscreen().catch(() => undefined);
        else v.webkitEnterFullscreen?.(); // iPhone Safari
    }, []);

    // Keep our own state in sync with the browser.
    useEffect(() => {
        const onFs = () => setFull(Boolean(document.fullscreenElement));
        document.addEventListener('fullscreenchange', onFs);
        return () => document.removeEventListener('fullscreenchange', onFs);
    }, []);

    // Keyboard: Space/K play, arrows seek, F fullscreen, Esc closes (or leaves fullscreen first).
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { if (!document.fullscreenElement) onClose(); return; }
            if (e.key === ' ' || e.key.toLowerCase() === 'k') {
                if ((e.target as HTMLElement)?.tagName === 'BUTTON' && e.key === ' ') return; // let a focused button handle Space
                e.preventDefault(); toggle();
            } else if (e.key === 'ArrowRight') { e.preventDefault(); seekBy(5); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); seekBy(-5); }
            else if (e.key.toLowerCase() === 'f') { e.preventDefault(); toggleFull(); }
            else if (e.key.toLowerCase() === 'm') { e.preventDefault(); toggleMute(); }
            else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nv = Math.min(1, Math.max(0, volume + (e.key === 'ArrowUp' ? 0.1 : -0.1)));
                applySound({ volume: nv, muted: nv === 0 });
                setHint(`Volume ${Math.round(nv * 100)}%`);
                setTimeout(() => setHint(null), 700);
                wake();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose, toggle, seekBy, toggleFull, toggleMute, applySound, volume, wake]);

    // Stop the page behind from scrolling, and clean up timers.
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        box.current?.focus();
        return () => {
            document.body.style.overflow = prev;
            clearTimeout(hideTimer.current);
            if (document.fullscreenElement) void document.exitFullscreen();
        };
    }, []);

    const pct = duration ? (time / duration) * 100 : 0;
    const bufPct = duration ? (buffered / duration) * 100 : 0;
    const uiVisible = showUi || !playing || menu;

    const iconBtn =
        'flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80';

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="TheWebHero video"
            onClick={onClose}
            className="twh-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
        >
            <div
                ref={box}
                tabIndex={-1}
                onClick={(e) => e.stopPropagation()}
                onMouseMove={wake}
                onTouchStart={wake}
                onMouseLeave={() => playing && setShowUi(false)}
                className={`group relative aspect-video w-full max-w-[min(1100px,calc((100vh-3rem)*16/9))] select-none overflow-hidden bg-black outline-none ring-1 ring-white/10 shadow-[0_40px_120px_-20px_rgba(124,58,237,0.55)] ${full ? 'max-w-none rounded-none' : 'rounded-2xl'} ${uiVisible ? '' : 'cursor-none'}`}
            >
                <video
                    ref={video}
                    src={src}
                    poster={posterFor(src)}
                    autoPlay
                    playsInline
                    preload="auto"
                    onClick={toggle}
                    onDoubleClick={toggleFull}
                    onPlay={() => { setPlaying(true); setEnded(false); wake(); }}
                    onPause={() => setPlaying(false)}
                    onEnded={() => { setEnded(true); setPlaying(false); }}
                    onWaiting={() => setWaiting(true)}
                    onPlaying={() => setWaiting(false)}
                    onCanPlay={() => setWaiting(false)}
                    onLoadedMetadata={(e) => { setDuration(e.currentTarget.duration); e.currentTarget.volume = volume; e.currentTarget.muted = muted; }}
                    onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
                    onProgress={(e) => {
                        const b = e.currentTarget.buffered;
                        if (b.length) setBuffered(b.end(b.length - 1));
                    }}
                    className="h-full w-full object-contain"
                />

                {/* Buffering spinner */}
                {waiting && !ended && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-12 w-12 animate-spin text-white/90" aria-label="Loading video" />
                    </div>
                )}

                {/* Big centre button while paused / finished */}
                {!playing && !waiting && (
                    <button
                        type="button"
                        onClick={toggle}
                        aria-label={ended ? 'Replay video' : 'Play video'}
                        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 text-white shadow-[0_20px_50px_-10px_rgba(124,58,237,0.9)] ring-4 ring-white/20 transition hover:scale-105"
                    >
                        {ended ? <RotateCcw className="h-8 w-8" /> : <Play className="h-9 w-9 translate-x-0.5 fill-white" />}
                    </button>
                )}

                {/* ±5s hint */}
                {hint && (
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                        {hint}
                    </div>
                )}

                {/* Top bar: title + close */}
                <div className={`absolute inset-x-0 top-0 flex items-center justify-between gap-3 bg-gradient-to-b from-black/80 to-transparent px-4 pb-10 pt-3 transition-opacity duration-300 sm:px-5 ${uiVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                    <div className="min-w-0">
                        <p className="truncate text-[15px] font-bold text-white sm:text-base">Our Story — TheWebHero</p>
                        <p className="truncate text-xs text-white/70">Ideas. Solutions. Real Impact.</p>
                    </div>
                    <button type="button" onClick={onClose} aria-label="Close video" className={iconBtn}>
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Bottom controls */}
                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 pb-2.5 pt-14 transition-opacity duration-300 sm:px-4 ${uiVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                    {/* Seek bar */}
                    <div className="group/seek relative h-5 cursor-pointer">
                        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/25 transition-all group-hover/seek:h-1.5">
                            <div className="absolute inset-y-0 left-0 bg-white/35" style={{ width: `${bufPct}%` }} />
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" style={{ width: `${pct}%` }} />
                        </div>
                        <div
                            aria-hidden="true"
                            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white shadow-lg transition-transform group-hover/seek:scale-100"
                            style={{ left: `${pct}%` }}
                        />
                        <input
                            type="range"
                            min={0}
                            max={duration || 0}
                            step={0.1}
                            value={time}
                            aria-label="Seek"
                            aria-valuetext={`${fmt(time)} of ${fmt(duration)}`}
                            onChange={(e) => {
                                const v = video.current;
                                if (v) v.currentTime = Number(e.target.value);
                                setTime(Number(e.target.value));
                                wake();
                            }}
                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        />
                    </div>

                    <div className="mt-0.5 flex items-center gap-1">
                        <button type="button" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'} className={iconBtn}>
                            {playing ? <Pause className="h-5 w-5 fill-white" /> : <Play className="h-5 w-5 fill-white" />}
                        </button>
                        {/* Sound: button + slider (slider opens on hover/focus; tapping the button works everywhere) */}
                        <div className="group/vol flex items-center">
                            <button
                                type="button"
                                onClick={toggleMute}
                                aria-label={muted || volume === 0 ? 'Unmute' : 'Mute'}
                                aria-pressed={muted || volume === 0}
                                className={iconBtn}
                            >
                                {muted || volume === 0 ? <VolumeX className="h-5 w-5" /> : volume < 0.5 ? <Volume1 className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                            </button>
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.05}
                                value={muted ? 0 : volume}
                                aria-label="Volume"
                                onChange={(e) => {
                                    const nv = Number(e.target.value);
                                    applySound({ volume: nv, muted: nv === 0 });
                                    wake();
                                }}
                                style={{ background: `linear-gradient(to right, #fff ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,.3) ${(muted ? 0 : volume) * 100}%)` }}
                                className="h-1 w-0 cursor-pointer appearance-none rounded-full opacity-0 transition-all duration-200 focus-visible:w-20 focus-visible:opacity-100 group-hover/vol:w-20 group-hover/vol:opacity-100 sm:group-hover/vol:ml-1 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white"
                            />
                        </div>
                        <span className="ml-1 text-[13px] font-semibold tabular-nums text-white/90">
                            {fmt(time)} <span className="text-white/50">/ {fmt(duration)}</span>
                        </span>

                        <div className="ml-auto flex items-center gap-1">
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setMenu((v) => !v)}
                                    aria-haspopup="menu"
                                    aria-expanded={menu}
                                    aria-label={`Playback speed, ${speed}x`}
                                    className={`${iconBtn} w-auto gap-1.5 px-3 text-[13px] font-bold`}
                                >
                                    <Gauge className="h-4 w-4" />
                                    {speed === 1 ? 'Normal' : `${speed}x`}
                                </button>
                                {menu && (
                                    <div role="menu" aria-label="Playback speed" className="absolute bottom-12 right-0 flex w-max gap-0.5 rounded-full bg-slate-900/95 p-1 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                                        {SPEEDS.map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                role="menuitemradio"
                                                aria-checked={s === speed}
                                                onClick={() => {
                                                    if (video.current) video.current.playbackRate = s;
                                                    setSpeed(s);
                                                    setMenu(false);
                                                }}
                                                className={`rounded-full px-2.5 py-1.5 text-[13px] font-bold transition ${s === speed ? "bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white" : "text-white/80 hover:bg-white/10"}`}
                                            >
                                                {s}x
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button type="button" onClick={toggleFull} aria-label={full ? 'Exit fullscreen' : 'Fullscreen'} className={iconBtn}>
                                {full ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/** The clickable video card (rendered on the server as children) plus its popup player. */
export default function AboutVideo({ videoUrl, className, children }: { videoUrl?: string; className: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), []);

    return (
        <>
            <div onClick={() => videoUrl && setOpen(true)} className={className}>
                {children}
            </div>
            {/* Rendered on <body>: inside the section, content-visibility/transform would clip a fixed overlay. */}
            {open && videoUrl && createPortal(<Player src={videoUrl} onClose={close} />, document.body)}
        </>
    );
}
