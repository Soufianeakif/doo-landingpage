'use client';

import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const colVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

const Footer: React.FC = () => {
    const t = useTranslations('footer');
    const navT = useTranslations('nav');
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <motion.div
                    variants={colVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={0}
                >
                    <Link href="/" className="flex items-center gap-2">
                        <Image className="min-w-fit w-5 h-5 md:w-7 md:h-7" src="/images/logo.png" alt="logo" width={200} height={200} />
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {t('subheading')}
                    </p>
                </motion.div>
                <motion.div
                    variants={colVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={1}
                >
                    <h2 className="text-lg font-semibold mb-4">{t('quickLinks')}</h2>
                    <ul className="text-foreground-accent">
                        <li className="mb-2">
                            <Link href="#features" className="hover:text-foreground transition-colors">{navT('features')}</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="#testimonials" className="hover:text-foreground transition-colors">{navT('testimonials')}</Link>
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    variants={colVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    custom={2}
                >
                    <h2 className="text-lg font-semibold mb-4">{t('contact')}</h2>

                    {footerDetails.email && <a href={`mailto:${footerDetails.email}`}  className="block text-foreground-accent hover:text-foreground transition-colors">{footerDetails.email}</a>}

                    {footerDetails.telephone && <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground transition-colors">{footerDetails.telephone}</a>}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <motion.div
                                            key={platformName}
                                            whileHover={{ scale: 1.2, y: -3 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <Link
                                                href={footerDetails.socials[platformName]}
                                                aria-label={platformName}
                                            >
                                                {getPlatformIconByName(platformName)}
                                            </Link>
                                        </motion.div>
                                    )
                                }
                            })}
                        </div>
                    )}
                </motion.div>
            </div>
            <motion.div
                className="mt-8 md:text-center text-foreground-accent px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;
