'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FiSearch, FiCalendar, FiMapPin } from 'react-icons/fi';

const stepIcons: Record<string, React.ReactNode> = {
    step1: <FiSearch size={28} key="step1-icon" />,
    step2: <FiCalendar size={28} key="step2-icon" />,
    step3: <FiMapPin size={28} key="step3-icon" />,
};

const HowItWorks: React.FC = () => {
    const t = useTranslations('howItWorks');

    const steps = [
        { key: 'step1', number: '1' },
        { key: 'step2', number: '2' },
        { key: 'step3', number: '3' },
    ];

    return (
        <section id="how-it-works" className="py-10 lg:py-20 bg-hero-background">
            <motion.h2
                className="text-3xl lg:text-5xl lg:leading-tight font-bold text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t('title')}
            </motion.h2>
            <motion.p
                className="text-center text-foreground-accent mb-12 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
            >
                {t('subtitle')}
            </motion.p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
                {steps.map((step, index) => (
                    <React.Fragment key={step.key}>
                        <motion.div
                            className="flex flex-col items-center text-center max-w-xs"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className="relative mb-5">
                                <div className="w-20 h-20 rounded-full bg-[#FA5F0E] text-white flex items-center justify-center shadow-lg shadow-orange-500/25">
                                    {stepIcons[step.key]}
                                </div>
                                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-white text-sm font-bold flex items-center justify-center">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                {t(`${step.key}.title`)}
                            </h3>
                            <p className="text-foreground-accent text-base">
                                {t(`${step.key}.description`)}
                            </p>
                        </motion.div>

                        {index < steps.length - 1 && (
                            <motion.div
                                className="hidden lg:block text-[#FA5F0E]/40"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                            >
                                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                                    <path d="M0 12H40M40 12L34 6M40 12L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
