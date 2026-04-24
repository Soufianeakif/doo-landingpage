'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

const glowPulse = {
    scale: [1, 1.02, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

const Hero: React.FC = () => {
    const t = useTranslations('hero');
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div 
                className="absolute left-0 top-0 bottom-0 -z-10 w-full"
                animate={glowPulse}
            >
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </motion.div>

            {/* Animated gradient overlay */}
            <motion.div 
                className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#FA5F0E]/20"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 10, 0],
                            opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <motion.div 
                className="text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    {t('heading')}
                </motion.h1>
                
                <motion.p 
                    className="mt-4 text-foreground max-w-lg mx-auto"
                    variants={itemVariants}
                >
                    {t('subheading')}
                </motion.p>
                
                <motion.div 
                    className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </motion.div>

                <motion.div
                    animate={floatAnimation}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Image
                        src="/images/hero-mockup.webp"
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                        className='relative mt-12 md:mt-16 mx-auto z-10'
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
