import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full">
            <nav className="flex flex-wrap md:justify-center max-w-[1144px] mx-auto md:items-center text-white p-10">
                {/* Logo */}
                <div className="w-[50%]">
                    <a href="/">
                        <img className="w-[70px] h-[70px] rounded-full text-xl font-bold tracking-wide" src="/image/logos.png" alt="Logo" />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="w-[50%]">
                    <ul className={`md:flex md:justify-end gap-6 font-semibold transition-all duration-300 
                    ${isOpen ? "block bg-black p-4 rounded-xl bg-opacity-30 text-center" : "hidden md:flex"}`}>
                        <li>
                            <a href="#about" className="hover:text-gray-400">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-gray-400">Skills</a>
                        </li>
                        <li>
                            <a href="#project" className="hover:text-gray-400">Project</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-400">Contact</a>
                        </li>
                        <li>
                            <a href="#footer" className="hover:text-gray-400">Footer</a>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Menu Button for Mobile */}
                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✖" : "☰"}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;