import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaPinterestP, FaThreads, FaGoogle } from 'react-icons/fa6';
import { mapLink, telHref } from '../lib/contact';
import type { SiteSettings } from '../lib/cms/content';

const SOCIAL_ICONS = [
    { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, className: 'text-[#0a66c2]' },
    { key: 'twitter', label: 'X', Icon: FaXTwitter, className: 'text-slate-200' },
    { key: 'facebook', label: 'Facebook', Icon: FaFacebook, className: 'text-[#1877F2]' },
    { key: 'instagram', label: 'Instagram', Icon: FaInstagram, className: 'text-[#E4405F]' },
    { key: 'youtube', label: 'YouTube', Icon: FaYoutube, className: 'text-[#FF0000]' },
    { key: 'github', label: 'GitHub', Icon: FaGithub, className: 'text-slate-200' },
    { key: 'pinterest', label: 'Pinterest', Icon: FaPinterestP, className: 'text-[#E60023]' },
    { key: 'threads', label: 'Threads', Icon: FaThreads, className: 'text-slate-200' },
    { key: 'googleBusiness', label: 'Google', Icon: FaGoogle, className: 'text-[#4285F4]' },
] as const;

/** Contact strip above the navbar. Everything comes from Admin → Site settings. */
export default function Topbar({ settings }: { settings: SiteSettings }) {
    const { contact, social } = settings;
    const place = [contact.address.locality, contact.address.region].filter(Boolean).join(', ');
    const socials = SOCIAL_ICONS.filter((s) => social[s.key]);

    return (
        <div className="bg-slate-900 text-slate-300 py-2 px-4 md:px-8 lg:px-20 text-sm hidden lg:flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center space-x-6">
                {contact.email && (
                    <a href={`mailto:${contact.email}`} className="flex min-h-6 items-center space-x-2 py-0.5 hover:text-white">
                        <Mail size={16} className="text-blue-500" />
                        <span>{contact.email}</span>
                    </a>
                )}
                {contact.phone && (
                    <a href={telHref(contact.phone)} className="flex min-h-6 items-center space-x-2 py-0.5 hover:text-white">
                        <Phone size={16} className="text-blue-500" />
                        <span>{contact.phone}</span>
                    </a>
                )}
                {place && (
                    <a href={mapLink(contact)} target="_blank" rel="noopener noreferrer" className="flex min-h-6 items-center space-x-2 py-0.5 hover:text-white">
                        <MapPin size={16} className="text-blue-500" />
                        <span>{place}, India</span>
                    </a>
                )}
            </div>
            {socials.length > 0 && (
                <div className="flex items-center space-x-4">
                    <span className="mr-2 text-slate-400 font-medium">Follow Us:</span>
                    {socials.map(({ key, label, Icon, className }) => (
                        <a
                            key={key}
                            href={social[key]}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`TheWebHero on ${label}`}
                            className={`${className} hover:scale-110 hover:brightness-125 transition-all drop-shadow-sm`}
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
