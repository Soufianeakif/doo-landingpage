import { BsFillStarFill } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi"; // أيقونة للسرعة
import { MdVerifiedUser } from "react-icons/md"; // أيقونة للموثوقية

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "100+",
        icon: <MdVerifiedUser size={34} className="text-orange-500" />,
        description: "Verified professionals ready to serve you in Rabat and Harhoura."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Customer rating, reflecting our commitment to quality and trust."
    },
    {
        title: "30 min",
        icon: <HiOutlineClock size={34} className="text-blue-500" />,
        description: "Average response time to connect you with a service provider."
    }
];