'use client';

import React, { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { locales, localeLabels, Locale } from '@/i18n/config';
import { HiChevronDown } from 'react-icons/hi2';

// SVG Flag Components
const UKFlag = () => (
    <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
    </svg>
);

const FRFlag = () => (
    <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm">
        <path d="M0,0 h20 v30 h-20 z" fill="#0055A4"/>
        <path d="M20,0 h20 v30 h-20 z" fill="#fff"/>
        <path d="M40,0 h20 v30 h-20 z" fill="#EF4135"/>
    </svg>
);

const MAFlag = () => (
    <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm">
        <rect width="60" height="30" fill="#C1272D"/>
        <g fill="#006233">
            <path d="M30,6 l2.5,7.5 h8 l-6.5,4.5 l2.5,7.5 l-6.5-4.5 l-6.5,4.5 l2.5-7.5 l-6.5-4.5 h8 z"/>
        </g>
    </svg>
);

const flags: Record<Locale, React.FC> = {
    en: UKFlag,
    fr: FRFlag,
    ar: MAFlag,
};

const LanguageSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLocaleChange = (newLocale: Locale) => {
        if (newLocale === locale) {
            setIsOpen(false);
            return;
        }

        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
        setIsOpen(false);
    };

    const currentLocaleLabel = localeLabels[locale as Locale];

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 hover:border-[#FA5F0E] hover:shadow-md transition-all disabled:opacity-50"
                whileHover={{ scale: isPending ? 1 : 1.02 }}
                whileTap={{ scale: isPending ? 1 : 0.98 }}
            >
                {React.createElement(flags[locale as Locale])}
                <span className="hidden sm:inline text-sm font-medium text-foreground">
                    {currentLocaleLabel.label}
                </span>
                {isPending ? (
                    <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full"
                    />
                ) : (
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <HiChevronDown className="w-4 h-4 text-foreground" />
                    </motion.span>
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[180px] z-50"
                    >
                        {locales.map((loc) => {
                            const FlagComponent = flags[loc];
                            return (
                                <motion.button
                                    key={loc}
                                    onClick={() => handleLocaleChange(loc)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-start hover:bg-gray-50 transition-colors ${
                                        loc === locale ? 'bg-orange-50' : ''
                                    }`}
                                    whileHover={{ x: 4 }}
                                >
                                    <FlagComponent />
                                    <span className={`text-sm ${loc === locale ? 'font-semibold text-[#FA5F0E]' : 'text-foreground'}`}>
                                        {localeLabels[loc].label}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
