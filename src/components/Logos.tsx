'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const Logos: React.FC = () => {
    const t = useTranslations('logos');
    return (
        <section id="logos" className="py-20 px-5 bg-background">
            <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Animated Flag */}
                <motion.div 
                    className="flex justify-center items-center mb-4"
                    animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <Image 
                        src="https://cdn-icons-png.flaticon.com/512/5372/5372851.png" 
                        alt="Morocco flag showing Doo availability in Rabat, Salé, Témara and Harhoura"
                        width={60} 
                        height={60}
                        className="drop-shadow-lg"
                    />
                </motion.div>

                {/* Animated text reveal */}
                <motion.p 
                    className="text-2xl md:text-3xl font-bold text-center mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <motion.span 
                        className="text-[#FA5F0E] inline-block"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        {t('available')}
                    </motion.span>{" "}
                    {t('cities')}
                </motion.p>

                <motion.p 
                    className="text-lg text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {t('comingSoon')}
                    </motion.span>
                </motion.p>

                {/* Animated city indicators */}
                <motion.div 
                    className="flex justify-center gap-3 mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    {['Rabat', 'Salé', 'Témara', 'Harhoura'].map((city, index) => (
                        <motion.div
                            key={city}
                            className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FA5F0E]/10 text-[#FA5F0E] text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(250, 95, 14, 0.2)" }}
                        >
                            <motion.span
                                className="w-2 h-2 rounded-full bg-[#FA5F0E]"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                            />
                            {city}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Logos