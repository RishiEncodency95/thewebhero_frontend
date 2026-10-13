'use client';

import React from 'react';
import type { IndustryCategoryGroup } from '../../types/industry';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const toMenu = (groups: IndustryCategoryGroup[]): MegaMenuCategory[] =>
    groups.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.industries.map((i) => ({ slug: i.slug, title: i.name, description: i.shortDescription })),
}));

export default function IndustriesMegaMenu({ isOpen, onClose, categories }: { isOpen: boolean; onClose: () => void; categories: IndustryCategoryGroup[] }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/industries"
            railLabel="Industries"
            categories={toMenu(categories)}
            allLabel="All Industries"
            footerText="Domain-ready software for your sector."
        />
    );
}
