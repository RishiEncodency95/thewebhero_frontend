import type React from 'react';
import type { StaticImageData } from 'next/image';
import {
    SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiPhp, SiLaravel, SiHtml5, SiCss,
    SiWordpress, SiShopify, SiKotlin, SiSwift, SiFlutter, SiAndroid, SiApple, SiFirebase,
    SiDotnet, SiPython, SiElectron, SiQt, SiNodedotjs, SiExpress, SiNestjs, SiGraphql,
    SiPostman, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiFigma, SiGoogleanalytics,
    SiSelenium, SiJest, SiDocker, SiKubernetes, SiLinux, SiNginx, SiGithubactions,
    SiGrafana, SiCloudflare, SiTailwindcss, SiSwagger, SiCypress, SiGooglecloud,
    SiTauri, SiTerraform, SiPrometheus, SiSentry, SiApachekafka,
} from 'react-icons/si';
import {
    Globe, Smartphone, Code, Monitor, Server, Database, Sparkles, ShieldCheck, Wrench,
    Briefcase, Cloud, Building2, Users, Workflow, Network, HardDrive, LifeBuoy, Lock,
    Headphones, MapPin, RefreshCw, Gauge, Archive, CalendarCheck, Gamepad2, Bot,
    Search, TestTube2, Plug, Layers, ShoppingCart, AppWindow, Laptop,
} from 'lucide-react';

import webDev from '@/app/assets/home/service/web-dev.webp';
import appDev from '@/app/assets/home/service/app-dev.webp';
import softDev from '@/app/assets/home/service/soft-dev.webp';
import backendDev from '@/app/assets/home/service/backkend-api-dev.webp';
import cloudDev from '@/app/assets/home/service/cloud-dev.webp';
import uiux from '@/app/assets/home/service/ui-ux-des.webp';
import itSupport from '@/app/assets/home/service/it-support.webp';
import ecommerce from '@/app/assets/home/service/e-commerce.webp';
import seoGrowth from '@/app/assets/home/service/seo-growth.webp';
import aiSolu from '@/app/assets/home/service/ai-solu.webp';
import qaTesting from '@/app/assets/home/service/qa-testing.webp';

export type TechIcon = { name: string; Icon: React.ElementType; color: string };

const T = (name: string, Icon: React.ElementType, color: string): TechIcon => ({ name, Icon, color });

const REACT = T('React', SiReact, 'text-cyan-500');
const NEXT = T('Next.js', SiNextdotjs, 'text-slate-900');
const JS = T('JavaScript', SiJavascript, 'text-yellow-400');
const TS = T('TypeScript', SiTypescript, 'text-blue-600');
const PHP = T('PHP', SiPhp, 'text-indigo-500');
const LARAVEL = T('Laravel', SiLaravel, 'text-red-500');
const HTML = T('HTML5', SiHtml5, 'text-orange-600');
const CSS = T('CSS3', SiCss, 'text-blue-600');
const WP = T('WordPress', SiWordpress, 'text-sky-700');
const SHOPIFY = T('Shopify', SiShopify, 'text-green-600');
const KOTLIN = T('Kotlin', SiKotlin, 'text-violet-600');
const SWIFT = T('Swift', SiSwift, 'text-orange-500');
const FLUTTER = T('Flutter', SiFlutter, 'text-sky-500');
const ANDROID = T('Android', SiAndroid, 'text-green-500');
const APPLE = T('iOS', SiApple, 'text-slate-900');
const FIREBASE = T('Firebase', SiFirebase, 'text-amber-500');
const DOTNET = T('.NET', SiDotnet, 'text-violet-700');
const PYTHON = T('Python', SiPython, 'text-blue-500');
const ELECTRON = T('Electron', SiElectron, 'text-sky-600');
const QT = T('Qt', SiQt, 'text-green-600');
const TAURI = T('Tauri', SiTauri, 'text-amber-500');
const NODE = T('Node.js', SiNodedotjs, 'text-green-600');
const EXPRESS = T('Express', SiExpress, 'text-slate-900');
const NEST = T('NestJS', SiNestjs, 'text-rose-600');
const GRAPHQL = T('GraphQL', SiGraphql, 'text-pink-600');
const POSTMAN = T('Postman', SiPostman, 'text-orange-500');
const SWAGGER = T('Swagger', SiSwagger, 'text-lime-600');
const MONGO = T('MongoDB', SiMongodb, 'text-green-600');
const MYSQL = T('MySQL', SiMysql, 'text-blue-600');
const POSTGRES = T('PostgreSQL', SiPostgresql, 'text-sky-700');
const REDIS = T('Redis', SiRedis, 'text-red-600');
const KAFKA = T('Kafka', SiApachekafka, 'text-slate-900');
const FIGMA = T('Figma', SiFigma, 'text-pink-500');
const TAILWIND = T('Tailwind CSS', SiTailwindcss, 'text-sky-500');
const GA = T('Analytics', SiGoogleanalytics, 'text-amber-500');
const AI = T('AI & LLMs', Bot, 'text-purple-600');
const SELENIUM = T('Selenium', SiSelenium, 'text-green-600');
const JEST = T('Jest', SiJest, 'text-rose-700');
const CYPRESS = T('Cypress', SiCypress, 'text-slate-800');
const DOCKER = T('Docker', SiDocker, 'text-sky-600');
const K8S = T('Kubernetes', SiKubernetes, 'text-blue-600');
const LINUX = T('Linux', SiLinux, 'text-slate-900');
const NGINX = T('Nginx', SiNginx, 'text-green-600');
const GHA = T('GitHub Actions', SiGithubactions, 'text-blue-600');
const GRAFANA = T('Grafana', SiGrafana, 'text-orange-500');
const PROMETHEUS = T('Prometheus', SiPrometheus, 'text-orange-600');
const SENTRY = T('Sentry', SiSentry, 'text-violet-700');
const CLOUDFLARE = T('Cloudflare', SiCloudflare, 'text-orange-500');
const GCP = T('Google Cloud', SiGooglecloud, 'text-blue-500');
const TERRAFORM = T('Terraform', SiTerraform, 'text-violet-600');

type CategoryVisual = { image: StaticImageData; tech: TechIcon[]; Icon: React.ElementType };

/** Hero image, tech strip and fallback icon per service category (by slug). */
export const CATEGORY_VISUALS: Record<string, CategoryVisual> = {
    'web-development': { image: webDev, Icon: Globe, tech: [REACT, NEXT, JS, TS, PHP, LARAVEL, HTML, CSS, WP, SHOPIFY] },
    'mobile-app-development': { image: appDev, Icon: Smartphone, tech: [FLUTTER, REACT, KOTLIN, SWIFT, ANDROID, APPLE, FIREBASE, NODE] },
    'custom-software-development': { image: softDev, Icon: Code, tech: [REACT, NODE, TS, PYTHON, DOTNET, POSTGRES, DOCKER, GCP] },
    'desktop-development': { image: softDev, Icon: Monitor, tech: [ELECTRON, TAURI, QT, DOTNET, SWIFT, REACT, TS, LINUX] },
    'backend-development': { image: backendDev, Icon: Server, tech: [NODE, EXPRESS, NEST, PHP, LARAVEL, GRAPHQL, POSTMAN, SWAGGER, DOCKER] },
    'database-solutions': { image: backendDev, Icon: Database, tech: [MONGO, MYSQL, POSTGRES, REDIS, FIREBASE, KAFKA, DOCKER] },
    'design-growth-quality': { image: uiux, Icon: Sparkles, tech: [FIGMA, TAILWIND, GA, AI, DOCKER, SELENIUM, JEST, CYPRESS] },
    'it-infrastructure-support': { image: itSupport, Icon: ShieldCheck, tech: [LINUX, NGINX, DOCKER, K8S, CLOUDFLARE, GCP, GRAFANA, TERRAFORM] },
    'maintenance-managed-support': { image: cloudDev, Icon: Wrench, tech: [GHA, DOCKER, SENTRY, GRAFANA, PROMETHEUS, CLOUDFLARE, NODE, REACT] },
};

/** A few child services have a better-matching picture than their category's. */
export const SERVICE_IMAGE: Record<string, StaticImageData> = {
    'ecommerce-development': ecommerce,
    'shopify-development': ecommerce,
    'seo-digital-growth': seoGrowth,
    'ai-automation': aiSolu,
    'cloud-devops': cloudDev,
    'qa-testing': qaTesting,
};

/** Card icon per service slug; unknown slugs fall back to the category icon. */
export const SERVICE_ICON: Record<string, { Icon: React.ElementType; color: string }> = {
    'website-development': { Icon: Globe, color: 'text-blue-600' },
    'web-application-development': { Icon: AppWindow, color: 'text-purple-600' },
    'react-development': { Icon: SiReact, color: 'text-cyan-500' },
    'nextjs-development': { Icon: SiNextdotjs, color: 'text-slate-900' },
    'javascript-development': { Icon: SiJavascript, color: 'text-yellow-400' },
    'typescript-development': { Icon: SiTypescript, color: 'text-blue-600' },
    'php-development': { Icon: SiPhp, color: 'text-indigo-500' },
    'laravel-development': { Icon: SiLaravel, color: 'text-red-500' },
    'html-css-development': { Icon: SiHtml5, color: 'text-orange-600' },
    'wordpress-development': { Icon: SiWordpress, color: 'text-sky-700' },
    'shopify-development': { Icon: SiShopify, color: 'text-green-600' },
    'ecommerce-development': { Icon: ShoppingCart, color: 'text-blue-600' },
    'android-app-development': { Icon: SiAndroid, color: 'text-green-500' },
    'ios-app-development': { Icon: SiApple, color: 'text-slate-900' },
    'react-native-development': { Icon: SiReact, color: 'text-cyan-500' },
    'flutter-app-development': { Icon: SiFlutter, color: 'text-sky-500' },
    'kotlin-development': { Icon: SiKotlin, color: 'text-violet-600' },
    'java-app-development': { Icon: Code, color: 'text-orange-600' },
    'swift-development': { Icon: SiSwift, color: 'text-orange-500' },
    'cross-platform-app-development': { Icon: Smartphone, color: 'text-purple-600' },
    'enterprise-software-development': { Icon: Building2, color: 'text-blue-600' },
    'saas-development': { Icon: Cloud, color: 'text-sky-500' },
    'crm-development': { Icon: Users, color: 'text-pink-600' },
    'erp-development': { Icon: Briefcase, color: 'text-indigo-600' },
    'business-automation': { Icon: Workflow, color: 'text-purple-600' },
    'windows-app-development': { Icon: Laptop, color: 'text-blue-600' },
    'macos-app-development': { Icon: SiApple, color: 'text-slate-900' },
    'linux-app-development': { Icon: SiLinux, color: 'text-slate-900' },
    'cross-platform-desktop-development': { Icon: SiElectron, color: 'text-sky-600' },
    'nodejs-development': { Icon: SiNodedotjs, color: 'text-green-600' },
    'expressjs-development': { Icon: SiExpress, color: 'text-slate-900' },
    'php-laravel-backend': { Icon: SiLaravel, color: 'text-red-500' },
    'api-development': { Icon: Plug, color: 'text-purple-600' },
    'api-integration': { Icon: Layers, color: 'text-blue-600' },
    'database-design': { Icon: Database, color: 'text-purple-600' },
    'mongodb-development': { Icon: SiMongodb, color: 'text-green-600' },
    'mysql-development': { Icon: SiMysql, color: 'text-blue-600' },
    'postgresql-development': { Icon: SiPostgresql, color: 'text-sky-700' },
    'firebase-development': { Icon: SiFirebase, color: 'text-amber-500' },
    'redis-solutions': { Icon: SiRedis, color: 'text-red-600' },
    'database-migration': { Icon: RefreshCw, color: 'text-blue-600' },
    'database-optimization': { Icon: Gauge, color: 'text-emerald-600' },
    'database-backup': { Icon: Archive, color: 'text-orange-600' },
    'ui-ux-design': { Icon: SiFigma, color: 'text-pink-500' },
    'seo-digital-growth': { Icon: Search, color: 'text-emerald-600' },
    'ai-automation': { Icon: Bot, color: 'text-purple-600' },
    'cloud-devops': { Icon: Cloud, color: 'text-sky-500' },
    'qa-testing': { Icon: TestTube2, color: 'text-rose-600' },
    'game-development': { Icon: Gamepad2, color: 'text-indigo-600' },
    'networking-solutions': { Icon: Network, color: 'text-blue-600' },
    'server-management': { Icon: Server, color: 'text-purple-600' },
    'desktop-support': { Icon: Monitor, color: 'text-sky-600' },
    'hardware-installation': { Icon: HardDrive, color: 'text-slate-700' },
    'data-recovery': { Icon: LifeBuoy, color: 'text-orange-600' },
    'it-maintenance-support': { Icon: Wrench, color: 'text-indigo-600' },
    'backup-solutions': { Icon: Archive, color: 'text-emerald-600' },
    'it-security': { Icon: Lock, color: 'text-rose-600' },
    'remote-it-support': { Icon: Headphones, color: 'text-purple-600' },
    'onsite-it-support': { Icon: MapPin, color: 'text-pink-600' },
    'website-maintenance': { Icon: Globe, color: 'text-blue-600' },
    'application-maintenance': { Icon: AppWindow, color: 'text-purple-600' },
    'mobile-app-maintenance': { Icon: Smartphone, color: 'text-sky-600' },
    'managed-it-support': { Icon: ShieldCheck, color: 'text-emerald-600' },
    'monthly-maintenance': { Icon: CalendarCheck, color: 'text-orange-600' },
};
