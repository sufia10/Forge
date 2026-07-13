import "./projectcard.css";
import { FaGithub } from "react-icons/fa";
import {
    Star,
    Bookmark,
    
    ExternalLink,
    ChevronUp,
} from "lucide-react";

function ProjectCard({
    featured,
    image,
    title,
    description,
    tags,
    author,
    github,
    demo,
    upvotes,
}) {
    return (
        <article className="project-card">

            <header className="project-image">

                {featured && (
                    <span className="featured-badge">
                        <Star size={12} fill="white" strokeWidth={0} />
                        Featured
                    </span>
                )}

                <button className="bookmark-btn">
                    <Bookmark size={18} />
                </button>

                <img src={image} alt={title} />

            </header>

            <section className="project-content">

                <h2>{title}</h2>

                <p>{description}</p>

            </section>

            <section className="project-tags">

                {tags.map((tag) => (
                    <button
                        key={tag}
                        className="tag-btn"
                    >
                        {tag}
                    </button>
                ))}

            </section>

            <div className="divider"></div>

            <footer className="project-footer">

                <div className="project-author">

                    <img
                        src={author.avatar}
                        alt={author.name}
                        className="author-avatar"
                    />

                    <p>{author.name}</p>

                </div>

                <div className="project-actions">

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn"
                    >
                        <FaGithub size={16} />
                    </a>

                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn"
                    >
                        <ExternalLink size={16} />
                    </a>

                    <button className="upvote-btn">
                        <ChevronUp size={15} />
                        <span>{upvotes}</span>
                    </button>

                </div>

            </footer>

        </article>
    );
}

export default ProjectCard;