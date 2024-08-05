import React from "react";
import { motion } from "framer-motion";
import { project1 } from "../assets/data/index";
import { project2 } from "../assets/data/index";
import { project3 } from "../assets/data/index";
import { project4 } from "../assets/data/index";
import { project5 } from "../assets/data/index";
import { project6 } from "../assets/data/index";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* project1 */}
      <div>
        <div className="mb-5 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project1.image}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href={project1.link} target="_blank">
              <h6 className="mb-2 font-semibold">{project1.title}</h6>{" "}
            </a>
            <p className="mb-4 text-neutral-400">{project1.description}</p>
            {project1.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                        text-purple-900"
                >
                  {tech}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* project2 */}
      <div>
        <div className="mb-5 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project2.image}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href={project2.link} target="_blank">
              <h6 className="mb-2 font-semibold">{project2.title}</h6>{" "}
            </a>
            <p className="mb-4 text-neutral-400">{project2.description}</p>
            {project2.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                        text-purple-900"
                >
                  {tech}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* project3 */}
      <div>
        <div className="mb-5 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project3.image}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href={project3.link} target="_blank">
              <h6 className="mb-2 font-semibold">{project3.title}</h6>{" "}
            </a>
            <p className="mb-4 text-neutral-400">{project3.description}</p>
            {project3.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                        text-purple-900"
                >
                  {tech}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* project4 */}
      <div>
        <div className="mb-5 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project4.image}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href={project4.link} target="_blank">
              <h6 className="mb-2 font-semibold">{project4.title}</h6>{" "}
            </a>
            <p className="mb-4 text-neutral-400">{project4.description}</p>
            {project4.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                        text-purple-900"
                >
                  {tech}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* project5 */}
      <div>
        <div className="mb-5 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project5.image}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href={project5.link} target="_blank">
              <h6 className="mb-2 font-semibold">{project5.title}</h6>{" "}
            </a>
            <p className="mb-4 text-neutral-400">{project5.description}</p>
            {project5.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                        text-purple-900"
                >
                  {tech}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* project6 */}
      <div>
        <div className="mb-5 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project6.image}
              alt=""
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a href={project6.link} target="_blank">
              <h6 className="mb-2 font-semibold">{project6.title}</h6>{" "}
            </a>
            <p className="mb-4 text-neutral-400">{project6.description}</p>
            {project6.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium
                        text-purple-900"
                >
                  {tech}
                </span>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
