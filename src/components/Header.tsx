'use client';

import { Link } from '@/i18n/navigation';
import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';

import Container from './Container';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('nav');

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
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image className="text-foreground min-w-fit w-7 h-7" src="/images/logo.png" alt="logo" width={200} height={200} priority />
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
                                className="text-white bg-[#FA5F0E] hover:bg-[#f47d42] px-8 py-3 rounded-full transition-colors"
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
    );
};

export default Header;
