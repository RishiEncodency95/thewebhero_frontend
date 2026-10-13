import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa6';
import type { SiteSettings } from '../lib/cms/content';

const SOCIAL_ICONS = [
    { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, className: 'text-[#0a66c2]' },
    { key: 'twitter', label: 'X', Icon: FaXTwitter, className: 'text-slate-200' },
    { key: 'facebook', label: 'Facebook', Icon: FaFacebook, className: 'text-[#1877F2]' },
    { key: 'instagram', label: 'Instagram', Icon: FaInstagram, className: 'text-[#E4405F]' },
    { key: 'youtube', label: 'YouTube', Icon: FaYoutube, className: 'text-[#FF0000]' },
] as const;

/** Contact strip above the navbar. Everything comes from Admin → Site settings. */
export default function Topbar({ settings }: { settings: SiteSettings }) {
    const { contact, social } = settings;
    const place = [contact.address.locality, contact.address.region].filter(Boolean).join(', ');
    const socials = SOCIAL_ICONS.filter((s) => social[s.key]);

    return (
        <div className="bg-slate-900 text-slate-300 py-2 px-4 md:px-8 text-sm hidden lg:flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center space-x-6">
                {contact.email && (
                    <a href={`mailto:${contact.email}`} className="flex items-center space-x-2 hover:text-white">
                        <Mail size={16} className="text-blue-500" />
                        <span>{contact.email}</span>
                    </a>
                )}
                {contact.phone && (
                    <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="flex items-center space-x-2 hover:text-white">
                        <Phone size={16} className="text-blue-500" />
                        <span>{contact.phone}</span>
                    </a>
                )}
                {place && (
                    <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-blue-500" />
                        <span>{place}, India</span>
                    </div>
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
