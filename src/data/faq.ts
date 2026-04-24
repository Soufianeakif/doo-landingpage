import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} safe to use?`,
        answer: 'Absolutely. Every service provider on our platform undergoes a rigorous background check and identity verification. We also use secure encrypted systems to handle your data and service history.',
    },
    {
        question: `How do I book a professional on ${siteDetails.siteName}?`,
        answer: 'It’s simple! Choose the service you need, select your location, and browse through available professionals. Once you find the right match, you can book them instantly with just one click.',
    },
    {
        question: 'Are the prices fixed or can I negotiate?',
        answer: `Transparency is key at ${siteDetails.siteName}. We provide estimated upfront pricing for most services. For more complex tasks, you can get a detailed quote directly from the professional before the work begins.`
    },
    {
        question: 'What if I’m not satisfied with the service?',
        answer: 'Your satisfaction is our priority. If the job doesn’t meet your expectations, our support team will step in to ensure the issue is resolved. We also have a rating system to maintain high-quality standards.',
    },
    {
        question: 'How do I pay for the services?',
        answer: `We offer flexible payment options. You can pay securely through the ${siteDetails.siteName} app using your card, or choose the "Cash on Delivery" option after the service is successfully completed.`
    }
];