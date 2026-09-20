import React from 'react';
import {
    Layers,
    Users,
    MapPin,
    Smartphone,
    CheckCircle,
    Calendar,
    ShieldCheck,
    Sparkles,
    Clock,
    Image as ImageIcon,
    Shield,
    ListCheck,
    Settings,
    Bell,
    Heart,
    Map,
    DollarSign,
    Gamepad2,
    Trophy,
    UserCheck,
    Cpu
} from 'lucide-react';
import { ProjectFeature } from '../../types/portfolio';

interface ProjectFeaturesProps {
    features: ProjectFeature[];
}

const iconMap: Record<string, React.ElementType> = {
    Layers,
    Users,
    MapPin,
    Smartphone,
    CheckCircle,
    Calendar,
    ShieldCheck,
    Sparkles,
    Clock,
    Image: ImageIcon,
    Shield,
    ListCheck,
    Settings,
    Bell,
    Heart,
    Map,
    DollarSign,
    Gamepad2,
    Trophy,
    UserCheck,
    Cpu,
};

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
    if (!features || features.length === 0) return null;

    return (
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        KEY FEATURES & CAPABILITIES
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Core Functionality Built
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const IconComponent = (feature.iconName && iconMap[feature.iconName]) || Layers;

                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769FF] flex items-center justify-center mb-4">
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
