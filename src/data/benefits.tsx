import { FiClock, FiCheckCircle, FiMapPin, FiShield, FiStar, FiCreditCard, FiSmartphone, FiUserCheck, FiZap } from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Effortless Booking",
        description: "Stop wasting time searching for phone numbers. Doo.ma connects you with the best local professionals in seconds through a seamless digital experience.",
        bullets: [
            {
                title: "Real-Time Tracking",
                description: "Watch your service provider's arrival on the map in real-time.",
                icon: <FiMapPin size={26} />
            },
            {
                title: "Instant Matching",
                description: "Our algorithm finds the nearest available 'Maâlem' for your urgent needs.",
                icon: <FiZap size={26} />
            },
            {
                title: "Scheduled Services",
                description: "Book for now or schedule a visit for later at your convenience.",
                icon: <FiClock size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Trusted Professionals",
        description: "Quality and safety are our top priorities. Every professional on Doo.ma is manually vetted to ensure peace of mind for your home.",
        bullets: [
            {
                title: "Verified Backgrounds",
                description: "Rigorous identity and criminal record checks for every provider.",
                icon: <FiUserCheck size={26} />
            },
            {
                title: "Top-Rated Quality",
                description: "Access a community-driven rating system to choose the best experts.",
                icon: <FiStar size={26} />
            },
            {
                title: "Service Guarantee",
                description: "We stand behind the work. Your satisfaction is our primary goal.",
                icon: <FiCheckCircle size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Secure & Flexible Payments",
        description: "Experience transparent pricing with no hidden fees. Choose the payment method that suits your lifestyle in Morocco.",
        bullets: [
            {
                title: "Upfront Pricing",
                description: "Know the estimated cost before the work even begins.",
                icon: <FiSmartphone size={26} />
            },
            {
                title: "Cash or Card",
                description: "Pay securely via the app or choose cash after the job is done.",
                icon: <FiCreditCard size={26} />
            },
            {
                title: "Secure Transactions",
                description: "Advanced encryption to protect your digital payments and history.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-3.webp"
    },
]