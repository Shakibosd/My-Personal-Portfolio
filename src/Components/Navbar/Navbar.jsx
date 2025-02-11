import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full">
            <nav id="navbar" className="flex items-center justify-between max-w-[1144px] mx-auto text-white p-5 md:p-10">
                {/* Logo */}
                <div>
                    <a href="/">
                    <img className="w-[70px] h-[70px] rounded-full" src="./image/logos.png" alt="Your Website Logo" />
                    </a>
                </div>

                {/* Hamburger Menu Button for Mobile */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖" : "☰"}
                </button>

                {/* Desktop & Mobile Menu */}
                <ul className={`md:flex md:gap-6 font-semibold absolute md:static bg-black md:bg-transparent p-1 md:p-0 rounded-xl md:rounded-none bg-opacity-30 text-center md:text-left top-2 left-28 w-36 md:w-auto z-50 transition-all duration-300 
                    ${isOpen ? "block" : "hidden md:flex"}`}>
                    <li><a href="#about" className="hover:text-gray-400 block md:inline">About</a></li>
                    <li><a href="#skills" className="hover:text-gray-400 block md:inline">Skills</a></li>
                    <li><a href="#project" className="hover:text-gray-400 block md:inline">Project</a></li>
                    <li><a href="#contact" className="hover:text-gray-400 block md:inline">Contact</a></li>
                    <li><a href="#footer" className="hover:text-gray-400 block md:inline">Footer</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;