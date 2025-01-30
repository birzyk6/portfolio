import { useEffect, useState, useRef } from "react";
import AboutMe from "./AboutMe";
import { motion } from "framer-motion";
import MyStack from "./MyStack";
import MoreStack from "./MoreStack";
import MyEducation from "./MyEducation";
import MyWorkExperience from "./MyWorkExperience";

interface MyWorkProps {
    onSectionChange?: (section: string) => void;
}

function MyWork({ onSectionChange }: MyWorkProps) {
    const [isScrollable, setIsScrollable] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("about");
    const scrollableRef = useRef<HTMLDivElement>(null);
    const circle1Ref = useRef<HTMLDivElement>(null);
    const circle2Ref = useRef<HTMLDivElement>(null);
    const sections = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const initialCircle1Position = { x: 50, y: 50 };
        const initialCircle2Position = { x: 300, y: 150 };

        const checkIfScrollable = () => {
            if (scrollableRef.current) {
                setIsScrollable(
                    scrollableRef.current.scrollHeight >
                        scrollableRef.current.clientHeight
                );
            }
        };

        const handleScroll = () => {
            if (scrollableRef.current) {
                const scrollTop = scrollableRef.current.scrollTop;
                const containerHeight = scrollableRef.current.scrollHeight;
                const scrollPercentage =
                    scrollTop / (containerHeight - window.innerHeight);

                if (circle1Ref.current && circle2Ref.current) {
                    const bezierValue1X =
                        initialCircle1Position.x +
                        50 *
                            (Math.pow(scrollPercentage, 3) +
                                Math.pow(scrollPercentage, 2) +
                                scrollPercentage);
                    const bezierValue1Y =
                        initialCircle1Position.y +
                        100 *
                            (Math.pow(scrollPercentage, 3) -
                                2 * scrollPercentage +
                                3 * scrollPercentage);
                    const bezierValue2X =
                        initialCircle2Position.x +
                        100 *
                            (Math.pow(scrollPercentage + 0.5, 3) -
                                2 * Math.pow(scrollPercentage + 0.5, 2) +
                                scrollPercentage +
                                0.5);
                    const bezierValue2Y =
                        initialCircle2Position.y +
                        100 *
                            (Math.pow(scrollPercentage + 0.5, 3) -
                                3 * Math.pow(scrollPercentage + 0.5, 2) +
                                2 * (scrollPercentage + 0.5));

                    circle1Ref.current.style.transform = `translateX(${bezierValue1X}px) translateY(${bezierValue1Y}px)`;
                    circle2Ref.current.style.transform = `translateX(${bezierValue2X}px) translateY(${bezierValue2Y}px)`;
                }
            }
        };

        checkIfScrollable();
        window.addEventListener("resize", checkIfScrollable);
        if (scrollableRef.current) {
            scrollableRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("resize", checkIfScrollable);
            if (scrollableRef.current) {
                scrollableRef.current.removeEventListener(
                    "scroll",
                    handleScroll
                );
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find(
                    (entry) => entry.isIntersecting
                );
                if (visibleSection) {
                    const newActiveSection =
                        visibleSection.target.getAttribute("data-section") ||
                        "";
                    if (newActiveSection !== activeSection) {
                        setActiveSection(newActiveSection);
                        if (onSectionChange) onSectionChange(newActiveSection);
                    }
                    console.log(newActiveSection);
                }
            },
            {
                root: scrollableRef.current,
                threshold: 0.95,
            }
        );

        sections.current.forEach((section) => {
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, [onSectionChange, activeSection]);

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col items-center justify-start w-full max-h-[calc(100dvh-5rem)] px-5 bg-black/10 rounded-3xl border border-gray-600 m-10 overflow-hidden">
                <motion.div
                    className="absolute inset-0 -z-10 overflow-hidden rounded-3xl"
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
                >
                    <div
                        ref={circle1Ref}
                        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-green-500/50 via-teal-500/50 to-blue-500/50 saturate-200 blur-3xl"
                        style={{
                            transform: "translateX(50px) translateY(50px)",
                        }}
                    ></div>
                    <div
                        ref={circle2Ref}
                        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-500/50 via-blue-800/50 to-teal-500/50  blur-3xl"
                        style={{
                            transform: "translateX(300px) translateY(150px)",
                        }}
                    ></div>
                </motion.div>
                <div
                    ref={scrollableRef}
                    className={`relative block snap-y snap w-full max-h-[calc(100dvh-5rem)] overflow-x-hidden overflow-y-auto scrollbar z-10 ${
                        isScrollable ? "pr-5" : "pr-0"
                    }`}
                >
                    <div
                        ref={(el) => (sections.current[0] = el)}
                        data-section="about"
                        className="flex w-full pt-5 snap-start"
                    >
                        <AboutMe />
                    </div>
                    <div
                        ref={(el) => (sections.current[1] = el)}
                        data-section="stack"
                        className="flex w-full pt-5 snap-start"
                    >
                        <MyStack className="w-full" />
                    </div>
                    <div
                        ref={(el) => (sections.current[2] = el)}
                        data-section="morestack"
                        className="flex w-full pt-5 snap-start"
                    >
                        <MoreStack className="w-full" />
                    </div>
                    <div
                        ref={(el) => (sections.current[3] = el)}
                        data-section="education"
                        className="flex w-full pt-5 snap-start"
                    >
                        <MyEducation className="w-full" />
                    </div>
                    <div
                        ref={(el) => (sections.current[4] = el)}
                        data-section="workexperience"
                        className="flex w-full py-5 snap-start"
                    >
                        <MyWorkExperience className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWork;
