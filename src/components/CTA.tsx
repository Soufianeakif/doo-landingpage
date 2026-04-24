'use client';

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const CTA: React.FC = () => {
    const t = useTranslations('cta');
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <motion.div 
                className="relative h-full w-full z-10 mx-auto py-12 sm:py-20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="h-full w-full">
                    {/* Animated background with pulse */}
                    <motion.div 
                        className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]"
                        animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                    >
                        <motion.div 
                            className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                    {/* Glow effect */}
                    <motion.div
                        className="rounded-3xl absolute inset-0 -z-20 blur-3xl opacity-30"
                        style={{ background: "linear-gradient(135deg, #FA5F0E 0%, transparent 50%)" }}
                        animate={{
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {t('heading')}
                        </motion.h2>

                        <motion.p 
                            className="mx-auto max-w-xl md:px-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            {t('subheading')}
                        </motion.p>

                        <motion.div 
                            className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <AppStoreButton />
                            <PlayStoreButton />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA