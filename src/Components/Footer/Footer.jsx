import { FaArrowUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="footer" className="w-full relative bg-gray-900 text-white">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-5"
                style={{
                    backgroundImage: "url('/image/footer-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            {/* Footer Content */}
            <div className="relative mx-auto max-w-full px-5 md:max-w-[1144px] py-10 sm:gap-5 md:gap-60 grid md:grid-cols-3">
                <div className="flex flex-col text-center">
                    <h2 className="text-2xl font-bold">Programming</h2>
                    <ul className="mt-3 space-y-1 text-gray-200">
                        <li className="text-gray-300 hover:text-white"><a className="underline" target="_blank" href="https://codeforces.com/profile/Shakibosd_02" rel="noopener noreferrer">CodeForces</a></li>

                        <li className="text-gray-300 hover:text-white"><a className="underline" target="_blank" href="https://www.hackerrank.com/profile/syednazmusshaki1">HackerRank</a></li>

                        <li className="text-gray-300 hover:text-white"><a className="underline" target="_blank" href="https://leetcode.com/u/syednazmusshakib94/">LeetCode</a></li>

                        <li className="text-gray-300 hover:text-white"><a className="underline" target="_blank" href="https://www.naukri.com/code360/profile/504a45c9-7125-40a5-b87e-4a784afbc18b">CodingNinjas</a></li>

                        <li className="text-gray-300 hover:text-white"><a className="underline" target="_blank" href="https://cses.fi/user/221344">CSES</a></li>

                        <li className="text-gray-300 hover:text-white"><a className="underline" target="_blank" href="https://basecamp.eolymp.com/en/users/user379527">Eolymp</a></li>

                        <li className="text-gray-300 hover:text-white"><a className="underline" target="_blank" href="https://www.geeksforgeeks.org/user/syednazmus2qqv/">GeeksForGeeks</a></li>
                    </ul>
                </div>

                <div className="flex flex-col text-center">
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <ul className="mt-3 space-y-1 text-gray-200">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#skills" className="hover:text-white">Skills</a></li>
                        <li><a href="#project" className="hover:text-white">Project</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center">Other Contact</h2>
                    <div className="grid grid-cols-2 gap-10 mt-4">
                        <a href="https://www.facebook.com/syednazmusshakib.shakib" target="_blank"><FaFacebook className="text-4xl cursor-pointer hover:text-blue-500" /></a>
                        <a href="https://x.com/syed_shaki27278" target="_blank"><FaTwitter className="text-4xl cursor-pointer hover:text-blue-400" /></a>
                        <a href="https://www.instagram.com/shakibosd/" target="_blank"><FaInstagram className="text-4xl cursor-pointer hover:text-pink-500" /></a>
                        <a href="https://www.linkedin.com/in/syed-nazmus-shakib-686985264/" target="_blank"><FaLinkedin className="text-4xl cursor-pointer hover:text-blue-600" /></a>
                        <a href="https://github.com/Shakibosd" target="_blank"><FaGithub className="text-4xl cursor-pointer hover:text-[#555]" /></a>
                        <a href="https://www.youtube.com/@syednazmusshakib1833" target="_blank"><FaYoutube className="text-4xl cursor-pointer hover:text-red-600" /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-200 p-10">
                <p className="border-t border-gray-700 pt-5">&copy; {currentYear} I Have Developed.</p>
                <a href="#navbar" className="absolute bottom-5 -right-full pr-20">    
                    <button className="text-white bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
                        <FaArrowUp size={25} />
                    </button>
                </a>
            </div>
        </footer>
    );
};

export default Footer;