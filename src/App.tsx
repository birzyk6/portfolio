import { useInView } from "framer-motion";
import { useRef } from "react";
import FirstSection from "./components/FirstSection";
import TypeWrite from "./components/TypeWrite";

function App() {
    const secondSectionRef = useRef<HTMLDivElement>(null);
    const isSecondSectionVisible = useInView(secondSectionRef, {
        amount: 0.05,
    });

    return (
        <div className="relative snap-y snap-mandatory h-screen overflow-x-hidden overflow-y-scroll scrollbarglobal">
            {/* First Section */}
            <div className="snap-start h-screen">
                <FirstSection />
            </div>

            {/* Second Section */}
            <div
                ref={secondSectionRef}
                className="snap-start h-screen container mx-auto flex py-5 flex-row justify-between items-stretch"
            >
                {/* Left Side */}
                <div className="relative flex flex-col w-[50dvw] p-10">
                    {/* Adding key to force rerender */}
                    <TypeWrite
                        key={isSecondSectionVisible ? "visible" : "hidden"} // Key changes when visibility changes
                        text="My projects"
                        delayStart={isSecondSectionVisible ? 0.25 : 1000}
                        className="text-white xl:text-8xl lg:text-6xl tracking-wide leading-snug"
                    />
                    {/* Paragraph stays static */}
                    <p className="text-white tracking-wide mt-10 leading-snug">
                        I have worked on a variety of projects ranging from
                        website development to backend and frontend development
                        using React and TypeScript. Additionally, I have
                        experience in performing statistical analysis using
                        Python.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex flex-col w-[50dvw] p-10 pt-0"></div>
            </div>
        </div>
    );
}

export default App;
