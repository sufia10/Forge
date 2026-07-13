import "./projectcards.css";
import ProjectCard from "./Projectcard.jsx";
import projectData from "../../../Data/Projectcard.js";

function ProjectCards() {

    const cards = projectData.map((project) => {
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
        <section className="projectcards-container">
            {cards}
        </section>
    );
}

export default ProjectCards;