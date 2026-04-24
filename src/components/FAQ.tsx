"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const FAQ: React.FC = () => {
    const t = useTranslations('faq');
    
    const faqItems = [
        { q: t('q1'), a: t('a1') },
        { q: t('q2'), a: t('a2') },
        { q: t('q3'), a: t('a3') },
        { q: t('q4'), a: t('a4') },
        { q: t('q5'), a: t('a5') },
    ];
    
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Side - Animated entrance */}
                <motion.div 
                    className=""
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p 
                        className="hidden lg:block text-foreground-accent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {t('subtitle')}
                    </motion.p>
                    <SectionTitle>
                        <motion.h2 
                            className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {t('title')}
                        </motion.h2>
                    </SectionTitle>
                    <motion.p 
                        className="lg:mt-10 text-foreground-accent text-center lg:text-left"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        {t('ask')}
                    </motion.p>
                    <motion.a 
                        href="mailto:contact@doo.ma" 
                        className="mt-3 block text-xl lg:text-4xl text-[#FC5E0E] font-semibold hover:underline text-center lg:text-left"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        contact@doo.ma
                    </motion.a>
                </motion.div>

                {/* Right Side - Animated FAQ Items */}
                <motion.div 
                    className="w-full lg:max-w-2xl mx-auto border-b"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {faqItems.map((faq, index) => (
                        <motion.div 
                            key={index} 
                            className="mb-7"
                            variants={itemVariants}
                        >
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton 
                                            className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t group"
                                            as={motion.button}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <span className="text-2xl font-semibold group-hover:text-[#FA5F0E] transition-colors duration-300">
                                                {faq.q}
                                            </span>
                                            <motion.span
                                                animate={{ rotate: open ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                            </motion.span>
                                        </DisclosureButton>
                                        <motion.div
                                            initial={false}
                                            animate={{ 
                                                height: open ? "auto" : 0,
                                                opacity: open ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent" static>
                                                {faq.a}
                                            </DisclosurePanel>
                                        </motion.div>
                                    </>
                                )}
                            </Disclosure>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;