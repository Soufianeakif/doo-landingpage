'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FiShield, FiDollarSign, FiMapPin } from 'react-icons/fi';

const featureIcons: Record<string, React.ReactNode> = {
    verified: <FiShield size={32} key="verified-icon" />,
    pricing: <FiDollarSign size={32} key="pricing-icon" />,
    tracking: <FiMapPin size={32} key="tracking-icon" />,
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const KeyFeatures: React.FC = () => {
    const t = useTranslations('keyFeatures');

    const features = [
        { key: 'verified' },
        { key: 'pricing' },
        { key: 'tracking' },
    ];

    return (
        <section id="key-features" className="py-10 lg:py-20">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.key}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 hover:border-[#FA5F0E]/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#FA5F0E]/10 text-[#FA5F0E] flex items-center justify-center mb-5 group-hover:bg-[#FA5F0E] group-hover:text-white transition-colors duration-300">
                            {featureIcons[feature.key]}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">
                            {t(`${feature.key}.title`)}
                        </h3>
                        <p className="text-foreground-accent text-base leading-relaxed">
                            {t(`${feature.key}.description`)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default KeyFeatures;
