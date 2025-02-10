import ProjectCard from "./ProjectCard";
import projectImg1 from '../../assets/image/screencapture-flower-seal-netlify-app-2025-02-10-14_04_35.png';
import projectImg2 from '../../assets/image/screencapture-smarts-city-netlify-app-2025-02-10-14_04_08.png';
import projectImg3 from '../../assets/image/screencapture-curdsoperations-netlify-app-2025-02-10-14_03_23.png';

const Project = () => {
    return (
        <div id="project" className="w-full">
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Project</h1>
            <div id="Projects" className="max-w-[1144px] mx-auto p-10">

                <div className="w-[100%] text-white flex gap-5">
                    <ProjectCard 
                        image={projectImg1} 
                        title="Flower Seal" 
                        main="This is a flower seal e-commerce website" 
                        demoLink="https://flower-seal.netlify.app/" 
                        frontend="https://github.com/Shakibosd/drf_final_exam_frontEnd"
                        backend="https://github.com/Shakibosd/DRF-Final-Exam-BackEnd"
                    />
                    <ProjectCard 
                        image={projectImg2} 
                        title="Smart City" 
                        main="This is a smart city sheba website" 
                        demoLink="https://smarts-city.netlify.app/" 
                        frontend="https://github.com/Shakibosd/Smart-City-Management-System-FrontEnd"
                        backend="https://github.com/Shakibosd/Shakibosd-Smart-City-Management-System-BackEnd"
                    />
                    <ProjectCard 
                        image={projectImg3} 
                        title="CRUD Operation" 
                        main="This is a CRUD operation website" 
                        demoLink="https://curdsoperations.netlify.app/" 
                        frontend="https://github.com/Shakibosd/CRUD-Operation-FrontEnd"
                        backend="https://github.com/Shakibosd/CRUD-Operation-BackEnds"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;