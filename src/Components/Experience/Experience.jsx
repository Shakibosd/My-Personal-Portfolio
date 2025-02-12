import ExperienceData from "../../Data/Experiences";

const Experience = () => {
    return (
        <div id="skills" className="w-full">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Skills</h1>
            <div id="Experience" className="max-w-[1144px] mx-auto p-5 md:p-10">
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 md:gap-5 p-1">
                    {ExperienceData.map((data) => {
                        const IconComponent = data.icon;
                        return (
                            <a key={data.id} href={data.url} target={data.target} className="p-3 bg-gray-900 shadow-lg hover:bg-gray-950 flex justify-center items-center rounded-2xl">
                                {IconComponent ? <IconComponent color={data.color} size={50} /> : null}
                                {data.img ? (
                                    <a href={data.url} target={data.target}> 
                                        <img src={data.img} width={data.width} className={data.extraClass} alt={data.alt} />
                                    </a>
                                ) : null}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;
