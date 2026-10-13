'use client';

import React from 'react';
import type { TechnologyCategoryGroup } from '../../types/technology';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const toMenu = (groups: TechnologyCategoryGroup[]): MegaMenuCategory[] =>
    groups.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.technologies.map((t) => ({ slug: t.slug, title: t.name, description: t.shortDescription })),
}));

export default function TechnologiesMegaMenu({ isOpen, onClose, categories }: { isOpen: boolean; onClose: () => void; categories: TechnologyCategoryGroup[] }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/technologies"
            railLabel="Tech Stack"
            categories={toMenu(categories)}
            allLabel="All Technologies"
            footerText="Modern, proven stacks picked for your product."
        />
    );
}
