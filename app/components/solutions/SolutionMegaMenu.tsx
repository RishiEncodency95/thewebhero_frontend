'use client';

import React from 'react';
import { SOLUTION_CATEGORIES } from '../../lib/solutions';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const CATEGORIES: MegaMenuCategory[] = SOLUTION_CATEGORIES.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.solutions.map((s) => ({ slug: s.slug, title: s.title, description: s.shortDescription })),
}));

export default function SolutionMegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/solutions"
            railLabel="Business Solutions"
            categories={CATEGORIES}
            allLabel="All Solutions"
            footerText="Not sure which solution fits? We'll help you choose."
        />
    );
}
