import profileimg from '../../assets/image/photo_2025-01-04_23-53-48 (2).jpg';
import TextChange from '../TextChange/TextChange';
import './Home.css';

const Home = () => {
    return (
        <div id='home' className="w-full">
            <div className="text-white flex flex-col md:flex-row max-w-[1144px] p-10 py-10 mx-auto items-center px-5 sm:px-10">
                {/* Text Section */}
                <div className="w-full sm:w-[80%] md:w-[70%] text-center sm:text-left">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-normal tracking-tighter">
                        <TextChange />
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl tracking-tight mt-3 sm:mt-5">
                        I am a Programmer & I am a Backend Developer & Frontend Developer.
                    </p>
                    <a href="https://drive.google.com/file/d/12j3pKafAFE42aA9KYj3j64pXWlr9hOWM/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 sm:mt-7 text-white py-2 px-3 text-sm sm:text-lg md:py-2 md:px-4 
                        hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#465697] inline-block">
                        Resume
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full sm:w-[80%] md:w-[30%] flex justify-center md:justify-end mt-5 md:mt-0">
                    <img src={profileimg}
                        alt="Profile Image"
                        className="w-[70%] sm:w-[60%] md:w-full rounded-xl object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
