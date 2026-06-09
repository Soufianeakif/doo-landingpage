'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { testimonials } from '@/data/testimonials';

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

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 40,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const Testimonials: React.FC = () => {
    const t = useTranslations('testimonials');
    
    const translatedTestimonials = testimonials.map((testimonial, index) => ({
        ...testimonial,
        role: t(`person${index + 1}.role`),
        message: t(`person${index + 1}.message`),
    }));
    
    return (
        <motion.div 
            className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {translatedTestimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                    }}
                    className="relative group"
                >
                    {/* Glow effect on hover */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FA5F0E]/20 to-[#f47d42]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    />
                    
                    <div className="p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800 hover:border-[#FA5F0E]/30 transition-colors duration-300">
                        <motion.div 
                            className="flex items-center mb-4 w-full justify-center lg:justify-start"
                            whileHover={{ x: 5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={testimonial.avatar}
                                    alt={`${testimonial.name}, Doo home services review`}
                                    width={50}
                                    height={50}
                                    className="rounded-full shadow-md"
                                />
                            </motion.div>
                            <div className="ms-4">
                                <h3 className="text-lg font-semibold text-[#FC5E0E]">{testimonial.name}</h3>
                                <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                            </div>
                        </motion.div>
                        
                        <motion.p 
                            className="text-foreground-accent text-center lg:text-start italic"
                            initial={{ opacity: 0.8 }}
                            whileInView={{ opacity: 1 }}
                        >
                            &quot;{testimonial.message}&quot;
                        </motion.p>
                        
                        {/* Quote decoration */}
                        <motion.div
                            className="absolute top-4 end-4 text-6xl text-[#FA5F0E]/10 font-serif leading-none select-none"
                            animate={{ 
                                y: [0, -3, 0],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.5,
                            }}
                        >
                            &quot;
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Testimonials;
