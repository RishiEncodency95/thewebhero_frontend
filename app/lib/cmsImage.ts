import type { StaticImageData } from 'next/image';

/**
 * Picture chosen in the admin, or the built-in one when the field is empty.
 * The admin picture reuses the built-in picture's width/height so the layout
 * reserves the same space (no shift); CSS sizes it from there.
 */
export function cmsImage(url: string | null | undefined, fallback: StaticImageData): StaticImageData {
    const ok = typeof url === 'string' && /^(https?:\/\/|\/)/.test(url.trim());
    return ok ? { src: url.trim(), width: fallback.width, height: fallback.height } : fallback;
}
