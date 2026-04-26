'use client';

import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    const t = useTranslations('footer');
    const navT = useTranslations('nav');
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image className="min-w-fit w-5 h-5 md:w-7 md:h-7" src="/images/logo.png" alt="logo" width={200} height={200} />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {t('subheading')}
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t('quickLinks')}</h2>
                    <ul className="text-foreground-accent">
                        <li className="mb-2">
                            <Link href="#features" className="hover:text-foreground">{navT('features')}</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#testimonials" className="hover:text-foreground">{navT('testimonials')}</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">{t('contact')}</h2>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`}  className="block text-foreground-accent hover:text-foreground">{footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">{footerDetails.telephone}</a>}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
