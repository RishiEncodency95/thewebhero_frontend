'use client';

import React from 'react';
import { TECH_CATEGORIES } from '../../lib/technologies';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const CATEGORIES: MegaMenuCategory[] = TECH_CATEGORIES.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.technologies.map((t) => ({ slug: t.slug, title: t.name, description: t.shortDescription })),
}));

export default function TechnologiesMegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/technologies"
            railLabel="Tech Stack"
            categories={CATEGORIES}
            allLabel="All Technologies"
            footerText="Modern, proven stacks picked for your product."
        />
    );
}
