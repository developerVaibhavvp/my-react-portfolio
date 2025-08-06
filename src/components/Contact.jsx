import React from "react";
import { CONTACT } from "../assets/data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          I'd love to hear from you! Whether you have a question or just want to
          say hi👋, feel free to drop an email.
        </motion.p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b cursor-pointer"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};
export default Contact;
