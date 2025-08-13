import React from "react";
import logo from "../assets/images/name.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { ReactTyped } from "react-typed";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 lg:sticky">
      <div className="flex flex-shrink-0 items-center">
        <ReactTyped
          strings={[
            "I am a Software\nEngineer",
            "I am a Web\nDeveloper",
            "I am a Programmer",
            "I am Vaibhav",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
          className="mx-2 text-xl font-bold text-blue-400 whitespace-pre-line"
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vaibhav-palande/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
        >
          <span className="hover:text-blue-400 cursor-pointer">
            <FaLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/Vaibhavvp28"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          <span className="hover:text-white cursor-pointer">
            <FaGithub />
          </span>
        </a>
        <a
          href="https://drive.google.com/file/d/1V1Cn8D6xvO5YKb5WsdgjpvcKzZyJXkmH/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          title="cv"
        >
          <span className="hover:text-yellow-400 cursor-pointer">
            <HiOutlineDocumentText />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
