'use client';

import React from 'react';
import { INDUSTRY_CATEGORIES } from '../../lib/industries';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const CATEGORIES: MegaMenuCategory[] = INDUSTRY_CATEGORIES.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.industries.map((i) => ({ slug: i.slug, title: i.name, description: i.shortDescription })),
}));

export default function IndustriesMegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/industries"
            railLabel="Industries"
            categories={CATEGORIES}
            allLabel="All Industries"
            footerText="Domain-ready software for your sector."
        />
    );
}
