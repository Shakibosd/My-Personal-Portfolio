import projectImg1 from '../../assets/image/screencapture-flower-seal-netlify-app-2025-02-10-14_04_35.png';
import projectImg2 from '../../assets/image/screencapture-smarts-city-netlify-app-2025-02-10-14_04_08.png';
import ProjectCard from "./ProjectCard";

const projects = [
    {
        image: projectImg1,
        title: "Flower Seal",
        main: "This is a flower seal e-commerce website",
        demoLink: "https://flower-seal.netlify.app/",
        frontend: "https://github.com/Shakibosd/drf_final_exam_frontEnd",
        backend: "https://github.com/Shakibosd/DRF-Final-Exam-BackEnd",
    },
    {
        image: projectImg2,
        title: "Smart City",
        main: "This is a smart city management website",
        demoLink: "https://smarts-city.netlify.app/",
        frontend: "https://github.com/Shakibosd/Smart-City-Management-System-FrontEnd",
        backend: "https://github.com/Shakibosd/Shakibosd-Smart-City-Management-System-BackEnd",
    },
];

const Project = () => {
    return (
        <div id="project" className="w-full">
            <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-bold text-center">Project</h1>
            <div id="Projects" className="max-w-[1144px] mx-auto md:p-10 p-6">
                <div className="w-full rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                image={project.image}
                                title={project.title}
                                main={project.main}
                                demoLink={project.demoLink}
                                frontend={project.frontend}
                                backend={project.backend}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;