/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  frontend,
  backend,
  tags,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-400 transition-all duration-300"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-70"
          }`}
        ></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/50 text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Project Links */}
        <div className="flex items-center gap-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors duration-300"
          >
            <FiExternalLink size={16} />
            <span>Live Demo</span>
          </a>

          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-300">
              <FiCode size={16} />
              <span>Code</span>
            </button>

            <div className="absolute left-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <a
                href={frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded-t-lg"
              >
                <FiGithub size={14} />
                <span>Frontend</span>
              </a>
              <a
                href={backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded-b-lg"
              >
                <FiGithub size={14} />
                <span>Backend</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
