import profileimg from '../../assets/image/photo_2025-01-04_23-53-48 (2).jpg';
import TextChange from '../TextChange/TextChange';
import './Home.css';

const Home = () => {
    return (
        <div id='home' className="w-full">
            <div className="text-white flex flex-col md:flex-row max-w-[1144px] mx-auto items-center p-10">
                {/* Text Section */}
                <div className="w-[70%]">
                    <div className="w-full md:w-2/4 text-center md:text-left">
                        <h1 className="text-lg sm:text-2xl md:text-4xl font-bold leading-normal tracking-tighter">
                            <TextChange />
                        </h1>
                        <p className="text-sm md:text-xl tracking-tight mt-5">
                            I am a Programmer & I am a Backend Developer & Frontend Developer.
                        </p>
                        <a href="https://drive.google.com/file/d/1_a5OWWagj9yGbUplZjKTBOicnW2rb9eT/view"
                            target="_blank"
                            className="mt-5 md:mt-7 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697] inline-block">
                            Resume
                        </a>
                    </div>
                </div>
                <br />
                {/* Image Section */}
                <div className="w-[30%]">
                    <div className='flex md:justify-end'>
                        <img src={profileimg}
                            className="w-[100%] rounded-xl object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;