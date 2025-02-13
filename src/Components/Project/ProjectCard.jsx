import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, main, image, demoLink, frontend, backend }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-2 sm:p-3 md:p-6 flex flex-col bg-gray-900 shadow-lg rounded-2xl">
            <img className="p-2 sm:p-4 w-full h-[300px] object-cover rounded-lg" src={image} alt={title} />
            <h3 className="px-2 sm:px-4 text-lg sm:text-xl md:text-2xl font-bold leading-none">{title}</h3>
            <p className='p-2 sm:p-4 text-xs sm:text-sm md:text-md leading-tight py-2'>{main}</p>

            <div className='p-2 sm:p-4 flex flex-wrap gap-2 sm:gap-4'>
                {/* Demo Button */}
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <button className='text-white py-1 px-2 sm:py-2 sm:px-3 text-xs sm:text-sm md:text-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                        Demo
                    </button>
                </a>

                {/* Source Code Button with Dropdown */}
                <div className="relative">
                    <button
                        className='text-white py-1 px-2 sm:py-2 sm:px-3 text-xs sm:text-sm md:text-lg hover:opacity-85 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Source Code
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <ul className="absolute left-0 mt-2 w-24 sm:w-32 bg-black bg-opacity-40 shadow-xl rounded-lg z-10">
                            <li className="cursor-pointer px-3 py-1 sm:px-4 sm:py-2 hover:bg-gray-400 text-white rounded-lg">
                                <a href={frontend} target="_blank" rel="noopener noreferrer">Frontend</a>
                            </li>
                            <li className="cursor-pointer px-3 py-1 sm:px-4 sm:py-2 hover:bg-gray-400 rounded-lg text-white">
                                <a href={backend} target="_blank" rel="noopener noreferrer">Backend</a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;