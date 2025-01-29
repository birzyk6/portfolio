import { AiOutlinePython } from "react-icons/ai";
import { SiDrizzle } from "react-icons/si";
import {
    TbBrandTypescript,
    TbBrandReact,
    TbBrandTailwind,
    TbBrandNextjs,
    TbDatabase,
    TbBrandDocker,
    TbTerminal2,
    TbBrandGit,
    TbBrandVite,
    TbBrandAdobePhotoshop,
} from "react-icons/tb";

interface MyStackProps {
    className?: string; // Allow an optional className prop
}

// Define the stack data
const stackData = [
    {
        icon: (
            <AiOutlinePython className="w-8 h-8 stroke-[1pt] resize-none text-green-700" />
        ),
        name: "Python",
        color: "text-green-700",
    },
    {
        icon: (
            <TbBrandTypescript className="w-8 h-8 stroke-[1pt] resize-none text-blue-700" />
        ),
        name: "TypeScript",
        color: "text-blue-700",
    },
    {
        icon: (
            <TbBrandReact className="w-8 h-8 stroke-[1pt] resize-none text-blue-500" />
        ),
        name: "React",
        color: "text-blue-500",
    },
    {
        icon: (
            <TbBrandTailwind className="w-8 h-8 stroke-[1pt] resize-none text-blue-600" />
        ),
        name: "Tailwind",
        color: "text-blue-600",
    },
    {
        icon: (
            <TbBrandNextjs className="w-8 h-8 stroke-[1pt] resize-none text-white" />
        ),
        name: "NextJS",
        color: "text-white",
    },
    {
        icon: (
            <TbDatabase className="w-8 h-8 stroke-[1pt] resize-none text-yellow-400" />
        ),
        name: "Databases",
        color: "text-yellow-400",
    },
    {
        icon: (
            <TbBrandDocker className="w-8 h-8 stroke-[1pt] resize-none text-blue-300" />
        ),
        name: "Docker",
        color: "text-blue-300",
    },
    {
        icon: (
            <TbTerminal2 className="w-8 h-8 stroke-[1pt] resize-none text-white" />
        ),
        name: "Linux",
        color: "text-white",
    },
    {
        icon: (
            <TbBrandGit className="w-8 h-8 stroke-[1pt] resize-none text-red-600" />
        ),
        name: "Git",
        color: "text-red-600",
    },
    {
        icon: <SiDrizzle className="w-8 h-8 resize-none text-blue-400" />,
        name: "Drizzle ORM",
        color: "text-blue-400",
    },
    {
        icon: (
            <TbBrandVite className="w-8 h-8 stroke-[1pt] resize-none text-yellow-400" />
        ),
        name: "Vite",
        color: "text-yellow-400",
    },
    {
        icon: (
            <TbBrandAdobePhotoshop className="w-8 h-8 stroke-[1pt] resize-none text-blue-500" />
        ),
        name: "Photoshop",
        color: "text-blue-500",
    },
];

const MyStack: React.FC<MyStackProps> = ({ className = "" }) => {
    return (
        <div id="MyStack" className={`flex-col p-5 link-cards ${className}`}>
            <div className="flex items-center mb-5">
                <h1 className="text-2xl font-semibold">My Stack</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-x-5 gap-y-1">
                {/* Iterate through the stackData array to render each element */}
                {stackData.map((stack, index) => (
                    <div
                        key={index}
                        className={`flex flex-row p-2 items-center space-x-2 py-2 ${
                            index < 3
                                ? "bg-blue-300/10 rounded-xl" // Golden background with opacity for the first 3 items
                                : ""
                        }`}
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

export default MyStack;
