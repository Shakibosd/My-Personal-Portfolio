import { FaHtml5, FaCss3, FaJs, FaBootstrap, FaReact, FaFigma, FaPython, FaGithub, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiCanva, SiDjango, SiMysql, SiPostgresql, SiC, SiCplusplus, SiPhp } from "react-icons/si";

import logo from '../../assets/image/logo.png';
import d from '../../assets/image/2344081.png'
import a from '../../assets/image/4149643.png';
import p from "../../assets/image/postmen.png";

const techLinks = {
    html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    bootstrap: "https://getbootstrap.com/",
    tailwind: "https://tailwindcss.com/",
    react: "https://react.dev/",
    vite: "https://vitejs.dev/",
    canva: "https://www.canva.com/",
    figma: "https://www.figma.com/",
    python: "https://www.python.org/",
    django: "https://www.djangoproject.com/",
    mysql: "https://www.mysql.com/",
    postgresql: "https://www.postgresql.org/",
    c: "https://en.cppreference.com/w/c",
    cplusplus: "https://en.cppreference.com/w/cpp",
    php: "https://www.php.net/",
    github: "https://github.com/",
    java: "https://www.java.com/",
    drf: "https://www.django-rest-framework.org/",
    datastructure: "https://www.geeksforgeeks.org/data-structures/",
    algorithm: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    postmen: "https://www.postman.com/"
};
// console.log(techLinks);

const Experience = () => {
    return (
        <div id="skills" className="w-full">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Skills</h1>
            <div id="Experience" className="max-w-[1144px] mx-auto p-10">
                <div className="w-[100%] grid grid-cols-7 gap-5 p-1">
                    {/* HTML */}
                    <a href={techLinks.html} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaHtml5 color="#E34F26" size={50} />
                    </a>
                    {/* CSS */}
                    <a href={techLinks.css} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaCss3 color="#1572b6" size={50} />
                    </a>
                    {/* JavaScript */}
                    <a href={techLinks.js} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaJs color="#F7DF1E" size={50} />
                    </a>
                    {/* Bootstrap */}
                    <a href={techLinks.bootstrap} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaBootstrap color="#7952B3" size={50} />
                    </a>
                    {/* Tailwind */}
                    <a href={techLinks.tailwind} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiTailwindcss color="#38B2AC" size={50} />
                    </a>
                    {/* React */}
                    <a href={techLinks.react} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaReact color="#61DAFB" size={50} />
                    </a>
                    {/* Vite */}
                    <a href={techLinks.vite} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiVite color="#646CFF" size={50} />
                    </a>
                    {/* Canva */}
                    <a href={techLinks.canva} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiCanva color="#00C4CC" size={50} />
                    </a>
                    {/* Figma */}
                    <a href={techLinks.figma} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaFigma color="#F24E1E" size={50} />
                    </a>
                    {/* Python */}
                    <a href={techLinks.python} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaPython color="#306998" size={50} />
                    </a>
                    {/* Django */}
                    <a href={techLinks.django} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiDjango color="#092E20" size={50} />
                    </a>
                    {/* MySQL */}
                    <a href={techLinks.mysql} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiMysql color="#4479A1" size={50} />
                    </a>
                    {/* PostgreSQL */}
                    <a href={techLinks.postgresql} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiPostgresql color="#336791" size={50} />
                    </a>
                    {/* C */}
                    <a href={techLinks.c} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiC color="#A8B9CC" size={50} />
                    </a>
                    {/* C++ */}
                    <a href={techLinks.cplusplus} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiCplusplus color="#00599C" size={50} />
                    </a>
                    {/* PHP */}
                    <a href={techLinks.php} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <SiPhp color="#777BB4" size={50} />
                    </a>
                    {/* GitHub */}
                    <a href={techLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaGithub color="#ddd" size={50} />
                    </a>
                    {/* Java */}
                    <a href={techLinks.java} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <FaJava color="#007396" size={50} />
                    </a>
                    {/* Django REST Framework */}
                    <a href={techLinks.drf} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <img src={logo} alt="DRF Logo" width="100" className="filter brightness-1 invert" />
                    </a>
                    {/* Data Structure */}
                    <a href={techLinks.datastructure} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <img src={d} alt="Datastructure" width="50" />
                    </a>
                    {/* Algorithm */}
                    <a href={techLinks.algorithm} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <img src={a} alt="Algorithm" width="50" className="filter brightness-1 invert" />
                    </a>
                    {/* postmen */}
                    <a href={techLinks.postmen} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 shadow-lg hover:bg-gray-800 flex justify-center items-center rounded-2xl">
                        <img src={p} alt="postmen" width="50" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experience;