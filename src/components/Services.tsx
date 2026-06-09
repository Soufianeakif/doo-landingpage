'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FiDroplet, FiTool, FiZap, FiFeather, FiSettings, FiSun } from 'react-icons/fi';

const serviceIcons: Record<string, React.ReactNode> = {
    cleaning: <FiDroplet size={32} key="cleaning-icon" />,
    plumbing: <FiTool size={32} key="plumbing-icon" />,
    electrical: <FiZap size={32} key="electrical-icon" />,
    painting: <FiFeather size={32} key="painting-icon" />,
    handyman: <FiSettings size={32} key="handyman-icon" />,
    gardening: <FiSun size={32} key="gardening-icon" />,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const Services: React.FC = () => {
    const t = useTranslations('services');

    const services = [
        { key: 'cleaning' },
        { key: 'plumbing' },
        { key: 'electrical' },
        { key: 'painting' },
        { key: 'handyman' },
        { key: 'gardening' },
    ];

    return (
        <section id="services" className="py-10 lg:py-20">
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

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {services.map((service) => (
                    <motion.div
                        key={service.key}
                        variants={cardVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#FA5F0E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                    >
                        <div className="w-14 h-14 rounded-xl bg-[#FA5F0E]/10 text-[#FA5F0E] flex items-center justify-center mb-4 group-hover:bg-[#FA5F0E] group-hover:text-white transition-colors duration-300">
                            {serviceIcons[service.key]}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            {t(`${service.key}.name`)}
                        </h3>
                        <p className="text-foreground-accent text-base">
                            {t(`${service.key}.description`)}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
