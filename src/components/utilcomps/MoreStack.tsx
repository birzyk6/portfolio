import { TbBrandFramerMotion } from "react-icons/tb";
import {
    SiMysql,
    SiNumpy,
    SiPlotly,
    SiPostgresql,
    SiScikitlearn,
    SiScipy,
} from "react-icons/si"; // Assuming you are okay using `Si` for some packages like NumPy, etc.

interface MoreStackProps {
    className?: string; // Allow an optional className prop
}

// Define the stack data for MoreStack
const moreStackData = [
    {
        icon: <SiNumpy className="w-8 h-8 resize-none text-blue-600" />,
        name: "NumPy",
        color: "text-blue-600",
    },
    {
        icon: <SiPlotly className="w-8 h-8 resize-none text-orange-600" />,
        name: "Matplotlib",
        color: "text-orange-600",
    },
    {
        icon: <SiScipy className="w-8 h-8 resize-none text-purple-600" />,
        name: "SciPy",
        color: "text-purple-600",
    },
    {
        icon: (
            <TbBrandFramerMotion className="w-8 h-8 stroke-[1pt] resize-none text-blue-400" />
        ),
        name: "Framer Motion",
        color: "text-blue-400",
    },
    {
        icon: <SiMysql className="w-8 h-8 resize-none text-blue-500" />,
        name: "MySQL",
        color: "text-blue-500",
    },
    {
        icon: <SiPostgresql className="w-8 h-8 resize-none text-blue-600" />,
        name: "PostgreSQL",
        color: "text-blue-600",
    },
    {
        icon: <SiScikitlearn className="w-8 h-8 resize-none text-red-500" />,
        name: "scikit-learn",
        color: "text-red-500",
    },
];

const MoreStack: React.FC<MoreStackProps> = ({ className = "" }) => {
    return (
        <div id="MoreStack" className={`flex-col p-5 link-cards ${className}`}>
            <div className="flex items-center mb-5">
                <h1 className="text-2xl font-semibold">Additional Stack</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-x-5 gap-y-1">
                {/* Iterate through the moreStackData array to render each element */}
                {moreStackData.map((stack, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center space-x-2 p-2"
                    >
                        {stack.icon}
                        <div className="h-px w-3 rounded-full bg-white"></div>
                        <p className="text-sm font-semibold">{stack.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreStack;
