import React from "react";
import { motion } from "framer-motion";

// The TypeWrite component expects a text prop and renders it
interface TypeWriteProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    delay?: number;
    speed?: number;
}

const TypeWrite: React.FC<TypeWriteProps> = ({
    text,
    className,
    style,
    delay,
    speed,
}) => {
    const containerVariants = {
        visible: {
            transition: {
                delayChildren: 0.5 + (delay ?? 0), // Delay the animation of children by 0.5 seconds
                staggerChildren: speed ?? 0.035, // Stagger the animation of children by 0.035 seconds
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    // Split the text into lines based on the new line character
    const lines = text.split("\n");
    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={style}
        >
            {lines.map((line, lineIndex) => (
                <div key={lineIndex} style={{ display: "flex" }}>
                    {line.split(" ").map((word, wordIndex) => (
                        <motion.span className={"word"}>
                            {wordIndex > 0 && <span>&nbsp;</span>}
                            {word.split("").map((char, charIndex) => (
                                <motion.span
                                    key={charIndex}
                                    variants={letterVariants}
                                    transition={{
                                        duration: 0.02,
                                        type: "easeInOut",
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                    ))}
                </div>
            ))}
        </motion.div>
    );
};

export default TypeWrite;
