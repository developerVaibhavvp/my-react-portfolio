import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiExpress } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaHtml5 className="text-7xl text-orange-600" title="HTML" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaCss3 className="text-7xl text-blue-600" title="CSS" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <IoLogoJavascript
            className="text-7xl text-yellow-600"
            title="JavaScript"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" title="React" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaNodeJs className="text-7xl text-green-600" title="Node.js" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <SiExpress className="text-7xl text-green-600" title="Express.js" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <RiTailwindCssFill
            className="text-7xl text-blue-800"
            title="TailwindCSS"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
        >
          <FaGitAlt className="text-7xl text-white" title="Git" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
