import { useState } from "react";
import { ChevronUp, ExternalLink, Share2, Eye, Star, ThumbsUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PurpleIcon from "../../components/Global/PurpleIcon/Purpleicon";
import projectdetailsbanner from "../../assets/projectdetailsbanner.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import "./projectdetails.css";

/* ─── Static data ─── */
const PROJECT = {
    tags: ["Python", "AI", "PostgreSQL"],
    title: "VectorDB Kit",
    description:
        "Open-source vector database client with semantic search, embedding pipelines, and a visual 3D exploration dashboard.",
    upvotes: "3.9k",
    stats: [
        { value: "3.9k", label: "Upvotes",  icon: ThumbsUp },
        { value: "12k",  label: "Stars",    icon: Star },
        { value: "98k",  label: "Views",    icon: Eye },
    ],
    about: `VectorDB Kit is a comprehensive open-source toolkit for building semantic search applications using vector databases. It provides a unified client interface compatible with Pinecone, Weaviate, Qdrant, Milvus, and pgvector.

The embedding pipeline module handles chunking, batching, and async upserts so you can index millions of documents with minimal boilerplate. Under the hood it uses FAISS for local similarity search during development, seamlessly switching to your production vector database in production.

The centrepiece of the project is its visual 3D exploration dashboard — a real-time WebGL canvas that lets you navigate high-dimensional embedding spaces, inspect cluster formations, and debug similarity issues visually rather than through raw distance metrics.`,
    creator: {
        name: "Liam Torres",
        handle: "@liamtorres",
        avatar: "https://picsum.photos/seed/liam-torres/100/100",
    },
    relatedProjects: [
        { id: 1, title: "Axiom Query",   upvotes: "1.2k", image: project1 },
        { id: 2, title: "Nebula UI",     upvotes: "2.1k", image: project2 },
        { id: 3, title: "Flux Gateway",  upvotes: "876",  image: project3 },
        { id: 4, title: "VectorDB Kit",  upvotes: "3.9k", image: project4 },
    ],
};

const INITIAL_COMMENTS = [
    {
        id: 1,
        author: "Maya Rodriguez",
        avatar: "https://picsum.photos/seed/maya-rodriguez/100/100",
        time: "2h ago",
        text: "This is exactly what I've been looking for. The embedding pipeline is incredibly clean. Already integrated it into our search feature — 40ms queries on 5M vectors.",
    },
    {
        id: 2,
        author: "James Liu",
        avatar: "https://picsum.photos/seed/james-liu/100/100",
        time: "5h ago",
        text: "The visual exploration dashboard alone is worth it. Seeing how vectors cluster in 3D is incredibly insightful for debugging similarity issues.",
    },
    {
        id: 3,
        author: "Nora Osei",
        avatar: "https://picsum.photos/seed/nora-osei/100/100",
        time: "1d ago",
        text: "Shipped this to production last week. Performance is stellar — querying 2M vectors in under 80ms. The semantic search accuracy is top tier.",
    },
];

/* ─── Component ─── */
function ProjectDetails() {
    const [upvoted, setUpvoted] = useState(false);
    const [comments, setComments] = useState(INITIAL_COMMENTS);
    const [commentInput, setCommentInput] = useState("");

    function postComment() {
        const trimmed = commentInput.trim();
        if (!trimmed) return;
        setComments((prev) => [
            ...prev,
            {
                id: Date.now(),
                author: "You",
                avatar: "https://picsum.photos/seed/you/100/100",
                time: "Just now",
                text: trimmed,
            },
        ]);
        setCommentInput("");
    }

    function handleInputKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            postComment();
        }
    }

    return (
        <div className="pd-page">

            {/* ── HERO BANNER ── */}
            <div className="pd-banner">
                <img src={projectdetailsbanner} alt="VectorDB Kit banner" />
                <div className="pd-banner-overlay" />
            </div>

            {/* ── HEADER CONTENT ── */}
            <div className="pd-container">
                <div className="pd-header">

                    {/* LEFT: tags · title · description · buttons */}
                    <div className="pd-header-left">
                        <div className="pd-tags">
                            {PROJECT.tags.map((tag) => (
                                <PurpleIcon key={tag} text={tag} />
                            ))}
                        </div>

                        <h1 className="pd-title">{PROJECT.title}</h1>

                        <p className="pd-description">{PROJECT.description}</p>

                        <div className="pd-actions">
                            <a href="#" className="pd-btn pd-btn-primary">
                                <ExternalLink size={15} />
                                Live Demo
                            </a>
                            <a href="#" className="pd-btn pd-btn-secondary">
                                <FaGithub size={15} />
                                GitHub Repository
                            </a>
                            <button className="pd-btn pd-btn-ghost">
                                <Share2 size={15} />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: upvote card */}
                    <div className="pd-upvote-card">
                        <button
                            className={`pd-upvote-btn ${upvoted ? "upvoted" : ""}`}
                            onClick={() => setUpvoted((v) => !v)}
                            aria-label="Upvote this project"
                        >
                            <ChevronUp size={28} strokeWidth={2.5} />
                        </button>
                        <span className="pd-upvote-count">{PROJECT.upvotes}</span>
                        <span className="pd-upvote-label">Upvotes</span>
                    </div>

                </div>

                {/* ── STATS ROW ── */}
                <div className="pd-stats-row">
                    {PROJECT.stats.map(({ value, label, icon: Icon }) => (
                        <div key={label} className="pd-stat-card">
                            <div className="pd-stat-icon">
                                <Icon size={16} />
                            </div>
                            <div className="pd-stat-body">
                                <span className="pd-stat-value">{value}</span>
                                <span className="pd-stat-label">{label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── MAIN CONTENT + SIDEBAR ── */}
                <div className="pd-body">

                    {/* ── LEFT / MAIN COLUMN ── */}
                    <div className="pd-main-col">

                        {/* About card */}
                        <div className="pd-card">
                            <h2 className="pd-card-heading">About this project</h2>
                            <div className="pd-about-text">
                                {PROJECT.about.split("\n\n").map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>

                        {/* Comments */}
                        <div className="pd-card">
                            <h2 className="pd-card-heading">
                                Comments
                                <span className="pd-comment-count">{comments.length}</span>
                            </h2>

                            <div className="pd-comments-list">
                                {comments.map((c) => (
                                    <div key={c.id} className="pd-comment">
                                        <img
                                            src={c.avatar}
                                            alt={c.author}
                                            className="pd-comment-avatar"
                                        />
                                        <div className="pd-comment-body">
                                            <div className="pd-comment-meta">
                                                <span className="pd-comment-author">{c.author}</span>
                                                <span className="pd-comment-time">{c.time}</span>
                                            </div>
                                            <p className="pd-comment-text">{c.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Comment input */}
                            <div className="pd-comment-input-row">
                                <input
                                    type="text"
                                    className="pd-comment-input"
                                    placeholder="Add a comment… Press Enter to post"
                                    value={commentInput}
                                    onChange={(e) => setCommentInput(e.target.value)}
                                    onKeyDown={handleInputKeyDown}
                                />
                                <button
                                    className="pd-comment-post-btn"
                                    onClick={postComment}
                                    disabled={!commentInput.trim()}
                                >
                                    Post
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* ── RIGHT / SIDEBAR ── */}
                    <aside className="pd-sidebar">

                        {/* Creator card */}
                        <div className="pd-card pd-creator-card">
                            <p className="pd-sidebar-label">CREATOR</p>
                            <img
                                src={PROJECT.creator.avatar}
                                alt={PROJECT.creator.name}
                                className="pd-creator-avatar"
                            />
                            <p className="pd-creator-name">{PROJECT.creator.name}</p>
                            <p className="pd-creator-handle">{PROJECT.creator.handle}</p>
                            <button className="pd-btn pd-btn-outline pd-view-profile-btn">
                                View Profile
                            </button>
                        </div>

                        {/* Related projects card */}
                        <div className="pd-card">
                            <h2 className="pd-card-heading">Related Projects</h2>
                            <div className="pd-related-list">
                                {PROJECT.relatedProjects.map((rp) => (
                                    <div key={rp.id} className="pd-related-item">
                                        <img
                                            src={rp.image}
                                            alt={rp.title}
                                            className="pd-related-thumb"
                                        />
                                        <div className="pd-related-info">
                                            <span className="pd-related-title">{rp.title}</span>
                                            <span className="pd-related-upvotes">
                                                <ChevronUp size={12} />
                                                {rp.upvotes}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </aside>

                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;