'use client';

import { Link } from '@/i18n/navigation';
import React, { useState, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';

import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';

const ScrollProgress: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-[#FA5F0E] z-[60] origin-left"
            style={{ scaleX }}
        />
    );
};

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const t = useTranslations('nav');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define menu items with translations
    const menuItems = [
        { text: t('features'), url: '#features' },
        { text: t('testimonials'), url: '#testimonials' },
    ];

    // Smooth scroll handler for anchor links
    const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only handle anchor links (starting with #)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            
            if (element) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (isOpen) {
                setIsOpen(false);
            }
        }
    }, [isOpen]);

    return (
        <>
        <ScrollProgress />
        <header className={`fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-300 ${
            scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md py-0'
                : 'bg-transparent md:absolute'
        }`}>
            <Container className="!px-0">
                <nav className={`mx-auto flex justify-between items-center px-5 transition-all duration-300 ${
                    scrolled ? 'py-2' : 'shadow-md md:shadow-none bg-white md:bg-transparent py-2 md:py-10'
                }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image className="text-foreground min-w-fit w-7 h-7" src="/images/logo.png" alt="Doo home services logo" width={200} height={200} priority />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-foreground hover:text-foreground-accent transition-colors"
                                    onClick={(e) => handleSmoothScroll(e, item.url)}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="#cta"
                                className="text-white bg-[#FA5F0E] hover:bg-[#f47d42] px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,95,14,0.4)] hover:scale-105"
                                onClick={(e) => handleSmoothScroll(e, '#cta')}
                            >
                                {t('download')}
                            </Link>
                        </li>
                        <li>
                            <LanguageSwitcher />
                        </li>
                    </ul>

                    {/* Mobile: Language Switcher + Burger Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSwitcher mobile />
                        
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-[#FA5F0E] hover:bg-[#f47d42] text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-foreground hover:text-primary block" 
                                    onClick={(e) => handleSmoothScroll(e, item.url)}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                href="#cta" 
                                className="text-black bg-[#FA5F0E] hover:bg-[#f47d42] px-5 py-2 rounded-full block w-fit" 
                                onClick={(e) => handleSmoothScroll(e, '#cta')}
                            >
                                {t('download')}
                            </Link>
                        </li>
                        <li className="pt-2">
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
        </>
    );
};

export default Header;
