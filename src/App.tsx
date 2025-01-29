import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import TypeWrite from "./components/TypeWrite";
import Line from "./components/utilcomps/Line";
import MyWork from "./components/MyWork";

function App() {
    const [activeSection, setActiveSection] = useState<string>("about");

    // Text corresponding to each section
    const sectionTexts: Record<string, string> = {
        about: "Learn more about me and my journey.",
        stack: "Explore my tech stack and skills.",
        morestack: "Discover additional tools I work with.",
        education: "Check out my educational background.",
        workexperience: "Explore my work experience.",
    };

    const titleTexts: Record<string, string> = {
        about: "All of my work\nin one place!",
        stack: "What I use",
        morestack: "I also use",
        education: "Education",
        workexperience: "Work\nExperience",
    };

    return (
        <div className="relative snap-y snap-proximity min-h-screen overflow-x-hidden scrollbar">
            {/* Main Container */}
            <div className="container mx-auto flex snap-start py-5 h-screen items-stretch">
                {/* Left Section */}
                <div className="relative w-1/2 flex flex-col justify-center">
                    {/* Vertical Line */}
                    <div className="absolute inset-y-0 left-0">
                        <Line />
                    </div>
                    {/* Text Positioned Above the Line */}
                    <div className="absolute bottom-8 -left-2 flex items-center z-10">
                        <TypeWrite
                            text={`${new Date().getFullYear()}`}
                            className="ml-5 text-white/30 text-sm tracking-widest"
                            style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                            }}
                            speed={0.1}
                            delay={2}
                        />
                    </div>

                    {/* Main Text */}
                    <motion.div
                        className="relative z-20"
                        initial={{ y: 0 }}
                        animate={{ y: -100 }}
                        transition={{
                            duration: 0.5,
                            delay: 3,
                            ease: "easeInOut",
                        }}
                    >
                        <TypeWrite
                            key={activeSection} // Forces remount on section change
                            text={titleTexts[activeSection]}
                            delayStart={0.1}
                            className="text-white p-10 pt-0 m-10 ml-5 xl:text-8xl lg:text-6xl tracking-wide leading-snug"
                        />
                        {/* Dynamic Section Text */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 3.5,
                                spring: { type: "spring", stiffness: 100 },
                            }}
                        >
                            <motion.div
                                key={activeSection} // Triggers animation on change
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className="text-white/50 font-light p-10 pt-2 ml-5 text-xl"
                            >
                                {sectionTexts[activeSection]}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Vertical Separator */}
                    <motion.div
                        className="absolute right-0 h-[calc(100%-4rem)] w-[0.5px] bg-white/10"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{
                            duration: 1,
                            delay: 2,
                            ease: "easeInOut",
                        }}
                        style={{ transformOrigin: "top" }}
                    ></motion.div>
                </div>

                {/* Right Section */}
                <div className="relative w-1/2 flex justify-center items-center">
                    <motion.div
                        initial={{ x: 3000 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 0.25,
                            delay: 1.5,
                            ease: "easeInOut",
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                        }}
                    >
                        <MyWork onSectionChange={setActiveSection} />
                    </motion.div>
                </div>
            </div>

            {/* Background Section */}
            <div className="relative h-screen snap-start bg-gray-500 -z-10"></div>
        </div>
    );
}

export default App;
