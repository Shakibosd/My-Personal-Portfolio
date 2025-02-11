import aboutImg from "../../assets/image/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    return (
        <div id="about" className="w-full">
               <h2 className="text-2xl md:text-4xl font-bold text-center text-white">About</h2>
            <div className="text-white flex flex-col md:flex-row max-w-[1144px] mx-auto items-center px-5 sm:px-10 py-10">
                <div className="w-full bg-gray-900 shadow-lg rounded-lg p-6 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center">
                        {/* Image */}
                        <img className="w-full sm:w-3/4 md:w-1/3 mx-auto md:mx-0" src={aboutImg} alt="About" />

                        {/* Text Section */}
                        <ul className="list-none space-y-6">
                            <li className="flex gap-3">
                            <IoArrowForward size={30} className="mt-1" />
                                <div className="max-w-full sm:max-w-md">
                                    <h1 className="text-lg md:text-2xl font-semibold">Frontend Developer</h1>
                                    <small className="text-gray-200">
                                        When I enrolled in computer science, I was afraid of the name programming, I didn&apos;t like it. But after listening to one of my older brothers, I first tried <span className="text-yellow-400">HTML</span>,<span className="text-yellow-400">CSS</span> and <span className="text-yellow-400">JavaScript</span>. After learning them, I made some websites and gradually started liking my work a lot. Then I started learning <span className="text-yellow-400">React+Vite</span>, which made me like frontend more, and I started doing different projects.
                                    </small>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <IoArrowForward size={30} className="mt-1" />
                                <div className="max-w-full sm:max-w-md">
                                    <h1 className="text-lg md:text-2xl font-semibold">Backend Developer</h1>
                                    <small className="text-gray-200">
                                        On the advice of one of my elder brothers, I enrolled and completed CSE Fundamentals with Phitron. Towards the end of the course in Phitron, we were taught <span className="text-yellow-400">OOP</span>, <span className="text-yellow-400">Database</span> and <span className="text-yellow-400">Python</span> famous frameworks <span className="text-yellow-400">Django</span> and <span className="text-yellow-400">Django REST framework</span>. This is basically how I started learning backend and at some point I started liking coding in Django, from here I started integrating backend and <span className="text-yellow-400">RESTful API</span>. I used <span className="text-yellow-400">Postman</span> for API testing.
                                    </small>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <IoArrowForward size={30} className="mt-1" />
                                <div className="max-w-full sm:max-w-md">
                                    <h1 className="text-lg md:text-2xl font-semibold">Programmer</h1>
                                    <small className="text-gray-200">
                                        On the advice of one of my elder brothers, I enrolled and took CSE Fundamentals with Phytron. At the beginning of the course in Phytron, we were taught <span className="text-yellow-400">C</span> programming, then <span className="text-yellow-400">C++</span>. After learning <span className="text-yellow-400">C</span> programming, we were made to solve many problems with <span className="text-yellow-400">C</span>, then many problems were solved with <span className="text-yellow-400">C++</span>. Then I learned data structures and algorithms, I solved some problems with data structures and algorithms. I kept <span className="text-yellow-400">solving problems</span> like this, <span className="text-yellow-400">but I did not continue problem solving later, because I did not enjoy problem solving, I enjoyed the development journey a lot</span>
                                    </small>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;