'use client';

import React from 'react';
import type { SolutionCategoryGroup } from '../../types/solution';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const toMenu = (groups: SolutionCategoryGroup[]): MegaMenuCategory[] =>
    groups.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.solutions.map((s) => ({ slug: s.slug, title: s.title, description: s.shortDescription })),
}));

export default function SolutionMegaMenu({ isOpen, onClose, categories }: { isOpen: boolean; onClose: () => void; categories: SolutionCategoryGroup[] }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/solutions"
            railLabel="Business Solutions"
            categories={toMenu(categories)}
            allLabel="All Solutions"
            footerText="Not sure which solution fits? We'll help you choose."
        />
    );
}
