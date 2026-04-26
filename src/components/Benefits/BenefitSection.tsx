"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"
import { useTranslations } from 'next-intl';

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";

interface Bullet {
    icon: JSX.Element;
    key: string;
}

interface Props {
    benefitKey: string;
    bullets: Bullet[];
    imageSrc: string;
    reversed?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefitKey, bullets, imageSrc, reversed }: Props) => {
    const t = useTranslations(`benefits.${benefitKey}`);

    return (
        <section className="benefit-section">
            <motion.div
                className={clsx(
                    "flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24",
                    { "lg:flex-row-reverse": reversed }
                )}
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div className="flex flex-wrap items-center w-full max-w-lg">
                    <div className="w-full text-center lg:text-start">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {t('title')}
                                </h3>
                            </SectionTitle>

                            <p className="mt-1.5 mx-auto lg:mx-0 leading-normal text-foreground-accent">
                                {t('description')}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:mx-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet 
                                    key={index} 
                                    title={t(`${item.key}`)} 
                                    icon={item.icon} 
                                    description={t(`${item.key}Desc`)} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-5 lg:mt-0">
                    <div className="w-fit flex justify-center">
                        <Image 
                            src={imageSrc} 
                            alt={t('title')} 
                            width={384} 
                            height={762} 
                            quality={85}
                            sizes="(max-width: 768px) 100vw, 384px"
                            className="w-full max-w-[384px] h-auto"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection