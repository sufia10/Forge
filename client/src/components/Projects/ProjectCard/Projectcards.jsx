import "./projectcards.css";
import ProjectCard from "./Projectcard.jsx";
import projectData from "../../../Data/Projectcard.js";
import { useState } from "react";
import Pagination from "../Pagination/Pagination.jsx";

function ProjectCards() {

    const projectsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage -1 )* projectsPerPage; 
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projectData.slice(startIndex, endIndex);

    const totalPages =  Math.ceil(projectData.length/projectsPerPage); 

 

    const cards = currentProjects.map((project) => {
        return (
            <ProjectCard
                key={project.id}
                featured={project.featured}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                author={project.author}
                github={project.github}
                demo={project.demo}
                upvotes={project.upvotes}
            />
        );
    });

    return (
        <div>
            <section className="projectcards-container">
            {cards}
        </section>
        <Pagination 
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={setCurrentPage}
/>
        </div>
    );

}

export default ProjectCards;