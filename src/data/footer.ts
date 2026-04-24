import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Bridging the gap between professional expertise and modern convenience: You click, we do.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        // {
        //     text: "Pricing",
        //     url: "#pricing"
        // },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'contact@doo.ma',
    telephone: '+212-632-646-282',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/doo.ma',
        //facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/doo-ma',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/doo.ma',
    }
}