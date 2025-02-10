import aboutImg from "../../assets/image/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
    return (
        <div id="about" className="w-full">
            <div className="text-white md:flex overflow-hidden max-w-[1144px] mx-auto items-center md:flex-wrap p-10">
                <div className="w-[100%] bg-gray-900 shadow-lg rounded-lg p-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-center">About</h2>
                    <div className="md:flex flex-wrap flex-col md:flex-row items-center md:justify-center pt-5">
                        <img className="md:h-80" src={aboutImg} alt="About" />
                        <ul className="list-none">
                            <li className="flex gap-3 py-4">
                                <IoArrowForward size={30} className="mt-1" />
                                <span className="w-96">
                                    <h1 className="text-xl md:text-1xl font-semibold leading-normal">Frontend Developer</h1>
                                    <small className="pt-1 text-gray-200">
                                        When I enrolled in computer science, I was afraid of the name programming, I didn&apos;t like it. But after listening to one of my older brothers, I first tried <span style={{ color: 'yellow' }}>HTML</span>, <span style={{ color: 'yellow' }}>CSS</span> and <span style={{ color: 'yellow' }}>JavaScript</span>. After learning them, I made some websites and gradually started liking my work a lot. Then I started learning <span style={{ color: 'yellow' }}>React+Vite</span>, which made me like frontend more, and I started doing different projects.
                                    </small>
                                </span>
                            </li>
                            <li className="flex gap-3 py-4">
                                <IoArrowForward size={30} className="mt-1" />
                                <span className="w-96">
                                    <h1 className="text-xl md:text-1xl font-semibold leading-normal">Backend Developer</h1>
                                    <small className="pt-1 text-gray-200">
                                        On the advice of one of my elder brothers, I enrolled and completed CSE Fundamentals with Phitron. Towards the end of the course in Phitron, we were taught <span style={{ color: 'yellow' }}>OOP</span>, <span style={{ color: 'yellow' }}>databases</span> and <span style={{ color: 'yellow' }}>Python</span> famous frameworks <span style={{ color: 'yellow' }}>Django</span> and <span style={{ color: 'yellow' }}>Django REST framework</span>. This is basically how I started learning backend and at some point I started liking coding in Django, from here I started integrating backend and <span style={{ color: 'yellow' }}>RESTful API</span>. I used <span style={{ color: 'yellow' }}>Postman</span> for API testing.
                                    </small>
                                </span>
                            </li>
                            <li className="flex gap-3 py-4">
                                <IoArrowForward size={30} className="mt-1" />
                                <span className="w-96">
                                    <h1 className="text-xl md:text-1xl font-semibold leading-normal">Programmer</h1>
                                    <small className="pt-1 text-gray-200">
                                        On the advice of one of my elder brothers, I enrolled and took CSE Fundamentals with Phytron. At the beginning of the course in Phytron, we were taught <span style={{color:'yellow'}}>C</span> programming, then <span style={{color:'yellow'}}>C++</span>. After learning <span style={{color:'yellow'}}>C</span> programming, we were made to solve many problems with <span style={{color:'yellow'}}>C</span>, then many problems were solved with <span style={{color:'yellow'}}>C++</span>. Then I learned data structures and algorithms, I solved some problems with data structures and algorithms. I kept <span style={{color:'yellow'}}>solving problems</span> like this, <span style={{color:'pink'}}>but I did not continue problem solving later, because I did not enjoy problem solving, I enjoyed the development journey a lot</span>.
                                    </small>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
