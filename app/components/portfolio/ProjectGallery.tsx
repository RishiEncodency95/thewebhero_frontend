'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { ProjectGalleryItem } from '../../types/portfolio';

interface ProjectGalleryProps {
    gallery?: ProjectGalleryItem[];
    coverImage: string;
    projectTitle: string;
}

export default function ProjectGallery({ gallery, coverImage, projectTitle }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<ProjectGalleryItem | null>(null);

    const items: ProjectGalleryItem[] = gallery && gallery.length > 0
        ? gallery
        : [{ url: coverImage, alt: `${projectTitle} preview`, caption: `${projectTitle} Primary Interface` }];

    return (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        UI/UX SHOWCASE & GALLERY
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Visual Interface Showcase
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(item)}
                            className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm cursor-pointer hover:shadow-lg transition-all"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    setSelectedImage(item);
                                }
                            }}
                            aria-label={`View ${item.caption || item.alt}`}
                        >
                            <Image
                                src={item.url}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-lg">
                                    <ZoomIn className="w-4 h-4 text-[#1769FF]" />
                                    <span>Expand Screenshot</span>
                                </span>
                            </div>
                            {item.caption && (
                                <div className="absolute bottom-0 inset-x-0 p-3 bg-slate-950/75 backdrop-blur-sm text-white text-xs font-medium truncate">
                                    {item.caption}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 overflow-hidden bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label="Close Lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                        {selectedImage.caption && (
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-slate-950/90 text-white text-sm font-semibold text-center border-t border-slate-800">
                                {selectedImage.caption}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
