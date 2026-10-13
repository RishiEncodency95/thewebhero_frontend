'use client';

import React from 'react';
import type { ServiceCategoryGroup } from '../../types/service';
import CategoryMegaMenu, { type MegaMenuCategory } from '../nav/CategoryMegaMenu';

const toMenu = (groups: ServiceCategoryGroup[]): MegaMenuCategory[] =>
    groups.map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description,
    iconName: cat.iconName,
    items: cat.services.map((s) => ({ slug: s.slug, title: s.title, description: s.shortDescription })),
}));

export default function ServiceMegaMenu({ isOpen, onClose, categories }: { isOpen: boolean; onClose: () => void; categories: ServiceCategoryGroup[] }) {
    return (
        <CategoryMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            basePath="/services"
            railLabel="Service Domains"
            categories={toMenu(categories)}
            allLabel="All Services"
            footerText="Need a full-suite engineering & IT partner?"
        />
    );
}
