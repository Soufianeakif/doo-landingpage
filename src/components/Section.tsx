'use client';

import { useTranslations } from 'next-intl';
import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title?: string;
    description?: string;
    titleKey?: string;
    descriptionKey?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ 
    id, 
    title, 
    description, 
    titleKey,
    descriptionKey,
    children 
}: React.PropsWithChildren<Props>) => {
    const t = useTranslations();
    
    const displayTitle = titleKey ? t(titleKey) : title;
    const displayDescription = descriptionKey ? t(descriptionKey) : description;
    
    return (
        <section id={id} className="py-10 lg:py-20">
            <SectionTitle>
                <h2 className="text-center mb-4">{displayTitle}</h2>
            </SectionTitle>
            <p className="mb-12 text-center">{displayDescription}</p>
            {children}
        </section>
    )
}

export default Section