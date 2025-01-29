import { motion } from "framer-motion";

const Line = () => {
    return (
        <motion.div
            className="absolute left-0 ml-5 mr-[100px] h-[calc(100%-8rem)] mt-[2rem] w-[0.5px] bg-white/10"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
            style={{ transformOrigin: "top" }}
        ></motion.div>
    );
};

export default Line;
