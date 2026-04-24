'use client';

import { useTranslations } from 'next-intl';
import BenefitSection from "./BenefitSection"
import { FiClock, FiCheckCircle, FiMapPin, FiShield, FiStar, FiCreditCard, FiSmartphone, FiUserCheck, FiZap } from "react-icons/fi";

const Benefits: React.FC = () => {
    const t = useTranslations('benefits');

    const benefits = [
        {
            key: 'effortlessBooking',
            imageSrc: "/images/mockup-1.webp",
            reversed: false,
            bullets: [
                { icon: <FiMapPin size={26} />, key: 'realTime' },
                { icon: <FiZap size={26} />, key: 'matching' },
                { icon: <FiClock size={26} />, key: 'scheduled' },
            ]
        },
        {
            key: 'trusted',
            imageSrc: "/images/mockup-2.webp",
            reversed: true,
            bullets: [
                { icon: <FiUserCheck size={26} />, key: 'verified' },
                { icon: <FiStar size={26} />, key: 'rated' },
                { icon: <FiCheckCircle size={26} />, key: 'guarantee' },
            ]
        },
        {
            key: 'payments',
            imageSrc: "/images/mockup-1.webp",
            reversed: false,
            bullets: [
                { icon: <FiSmartphone size={26} />, key: 'upfront' },
                { icon: <FiCreditCard size={26} />, key: 'cash' },
                { icon: <FiShield size={26} />, key: 'secure' },
            ]
        },
    ];

    return (
        <div id="features">
            <h2 className="sr-only">{t('effortlessBooking.title')}</h2>
            {benefits.map((item) => {
                return <BenefitSection 
                    key={item.key} 
                    benefitKey={item.key}
                    bullets={item.bullets}
                    imageSrc={item.imageSrc}
                    reversed={item.reversed}
                />
            })}
        </div>
    )
}

export default Benefits