'use client';

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { stats } from "@/data/stats";

// Animated counter hook
const useCountUp = (end: number, duration: number = 2, start: boolean = false) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const rafRef = useRef<number>();

    useEffect(() => {
        if (!start) return;
        
        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            countRef.current = Math.floor(easeOut * end);
            setCount(countRef.current);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [end, duration, start]);

    return count;
};

const AnimatedStat = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    // Extract number from title if it contains one
    const numberMatch = stat.title.match(/(\d+)/);
    const hasNumber = numberMatch !== null;
    const targetNumber = hasNumber ? parseInt(numberMatch[1]) : 0;
    const animatedNumber = useCountUp(targetNumber, 2, isInView);
    
    // Reconstruct title with animated number
    const animatedTitle = hasNumber 
        ? stat.title.replace(/\d+/, animatedNumber.toString())
        : stat.title;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div 
            ref={ref}
            className="text-center sm:text-left max-w-md sm:max-w-full mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
        >
            <motion.h3 
                className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    {stat.icon}
                </motion.span>
                <span>{animatedTitle}</span>
            </motion.h3>
            <p className="text-foreground-accent">{stat.description}</p>
        </motion.div>
    );
};

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-10 lg:py-20">
            <motion.div 
                className="grid sm:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {stats.map((stat, index) => (
                    <AnimatedStat key={stat.title} stat={stat} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default Stats