'use client';

import React from 'react';
import { SERVICE_CATEGORIES } from '../../lib/services';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const CATEGORIES: MegaMenuCategory[] = SERVICE_CATEGORIES.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.services.map((s) => ({ slug: s.slug, title: s.title, description: s.shortDescription })),
}));

export default function ServiceMegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/services"
            railLabel="Service Domains"
            categories={CATEGORIES}
            allLabel="All Services"
            footerText="Need a full-suite engineering & IT partner?"
        />
    );
}
