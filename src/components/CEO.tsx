'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CEO: React.FC = () => {
    const t = useTranslations('ceo');

    return (
        <section id="ceo" className="py-16 lg:py-24">
            <motion.div
                className="relative bg-gradient-to-br from-[#FA5F0E]/5 to-[#f47d42]/5 rounded-3xl p-8 lg:p-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Decorative quote mark */}
                <motion.div
                    className="absolute top-6 start-6 lg:top-8 lg:start-8 text-7xl lg:text-9xl text-[#FA5F0E]/10 font-serif leading-none select-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    &ldquo;
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                            <Image
                                src="/images/akifsoufiane.jpg"
                                alt="AKIF Soufiane, Doo founder and CEO"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center lg:text-start">
                        <motion.p
                            className="text-[#FA5F0E] font-medium text-sm tracking-wider uppercase mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {t('title')}
                        </motion.p>

                        <motion.h3
                            className="text-2xl lg:text-3xl font-bold text-foreground mb-1"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            {t('name')}
                        </motion.h3>

                        <motion.p
                            className="text-foreground-accent text-sm mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {t('role')}
                        </motion.p>

                        <motion.blockquote
                            className="text-foreground-accent leading-relaxed text-base lg:text-lg italic"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {t('quote')}
                        </motion.blockquote>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CEO;
