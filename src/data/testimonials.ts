import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Amine El Amrani',
        role: 'Homeowner in Rabat',
        message: `I used ${siteDetails.siteName} to find a plumber during an emergency. The response was incredibly fast, and the quality of work was professional. It’s finally great to have a reliable way to find "Maâlems" in Morocco.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Meryem Bennani',
        role: 'Freelance Interior Designer',
        message: `As a busy professional, I don't have time to search for reliable cleaners. ${siteDetails.siteName} has been a lifesaver. The app is seamless, and I love that I can track the professional's arrival in real-time.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Abdeljalil Mansouri',
        role: 'Professional Electrician',
        message: `Joining ${siteDetails.siteName} as a service provider has helped me reach more clients in Harhoura and Rabat without any marketing costs. The platform handles the bookings, so I can focus on doing my job.`,
        avatar: '/images/testimonial-3.webp',
    },
];