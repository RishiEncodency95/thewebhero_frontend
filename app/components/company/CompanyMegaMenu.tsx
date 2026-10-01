'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Mail, ShieldCheck, Users } from 'lucide-react';

import MegaMenuShell from '../nav/MegaMenuShell';
import { MenuColumn, MenuFeature, primaryBtn, secondaryBtn, type MenuLink } from '../nav/MegaMenuParts';

const ABOUT: MenuLink[] = [
    { label: 'About Us', href: '/company/about', description: 'Our story and mission.' },
    { label: 'Why Choose Us', href: '/company/why-us', description: 'What sets our work apart.' },
    { label: 'Our Process', href: '/company/process', description: 'How we take ideas to launch.' },
];

const PEOPLE: MenuLink[] = [
    { label: 'Our Team', href: '/company/team', description: 'The engineers behind the work.' },
    { label: 'Culture', href: '/company/culture', description: 'Principles we build by.' },
    { label: 'Careers', href: '/company/careers', description: 'Open positions — join us.' },
];

const TRUST: MenuLink[] = [
    { label: 'Testimonials', href: '/company/testimonials', description: 'What clients say about us.' },
    { label: 'Technology Partners', href: '/company/partners', description: 'Platforms we work with.' },
    { label: 'Awards & Recognition', href: '/company/awards', description: 'Milestones along the way.' },
];

export default function CompanyMegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <MegaMenuShell onClose={onClose}>
            <div className="grid grid-cols-12 gap-6 p-6">
                <div className="col-span-3"><MenuColumn title="About" Icon={Building2} tone="pink" links={ABOUT} onClose={onClose} /></div>
                <div className="col-span-3"><MenuColumn title="People" Icon={Users} tone="purple" links={PEOPLE} onClose={onClose} /></div>
                <div className="col-span-3"><MenuColumn title="Trust" Icon={ShieldCheck} tone="blue" links={TRUST} onClose={onClose} /></div>

                <div className="col-span-3">
                    <MenuFeature
                        eyebrow="Get in touch"
                        title="Have a project in mind?"
                        text="Web app, mobile app or custom software — let's talk it through."
                    >
                        <Link href="/contact" onClick={onClose} className={primaryBtn}>
                            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                            Contact Us
                        </Link>
                        <Link href="/company" onClick={onClose} className={secondaryBtn}>
                            Company Overview
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                    </MenuFeature>
                </div>
            </div>
        </MegaMenuShell>
    );
}
