import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";

const projectData = [
    {
        id: 1,
        featured: true,
        image: project1,
        title: "Axiom Query",
        description:
            "A blazing-fast SQL query builder for TypeScript with type-safe joins, migrations, and real-time subscriptions out of the box.",
        tags: ["TypeScript", "PostgreSQL", "Node.js"],
        author: {
            name: "Sarah Chen",
            avatar: "https://picsum.photos/seed/sarah-chen/100/100",
        },
        github: "#",
        demo: "#",
        upvotes: "1.2k",
    },

    {
        id: 2,
        featured: true,
        image: project2,
        title: "Nebula UI",
        description:
            "Headless component library for React with 60+ accessible primitives, dark mode, and a CLI for rapid scaffolding.",
        tags: ["React", "TypeScript", "Tailwind CSS"],
        author: {
            name: "Marcus Webb",
            avatar: "https://picsum.photos/seed/marcus-webb/100/100",
        },
        github: "#",
        demo: "#",
        upvotes: "2.1k",
    },

    {
        id: 3,
        featured: false,
        image: project3,
        title: "Flux Gateway",
        description:
            "API gateway middleware for Node.js with rate limiting, JWT auth, request transformation, and OpenAPI generation.",
        tags: ["Node.js", "Express", "Docker"],
        author: {
            name: "Aisha Patel",
            avatar: "https://picsum.photos/seed/aisha-patel/100/100",
        },
        github: "#",
        demo: "#",
        upvotes: "876",
    },

    {
        id: 4,
        featured: true,
        image: project4,
        title: "VectorDB Kit",
        description:
            "Open-source vector database client with semantic search, embedding pipelines, and a visual 3D exploration dashboard.",
        tags: ["Python", "AI", "PostgreSQL"],
        author: {
            name: "Liam Torres",
            avatar: "https://picsum.photos/seed/liam-torres/100/100",
        },
        github: "#",
        demo: "#",
        upvotes: "3.9k",
    },

    {
        id: 5,
        featured: false,
        image: project5,
        title: "Shipwright",
        description:
            "Zero-config deployment pipeline builder with multi-cloud support, preview deployments, and GitHub Actions integration.",
        tags: ["Docker", "Next.js", "TypeScript"],
        author: {
            name: "Priya Nakamura",
            avatar: "https://picsum.photos/seed/priya-nakamura/100/100",
        },
        github: "#",
        demo: "#",
        upvotes: "1.5k",
    },

    {
        id: 6,
        featured: false,
        image: project6,
        title: "Mosaic Analytics",
        description:
            "Self-hostable product analytics platform for developers. Event tracking, funnels, cohorts, and retention — no vendor lock-in.",
        tags: ["Next.js", "PostgreSQL", "TypeScript"],
        author: {
            name: "Devon Park",
            avatar: "https://picsum.photos/seed/devon-park/100/100",
        },
        github: "#",
        demo: "#",
        upvotes: "2.3k",
    },
{
    id: 7,
    featured: false,
    image: project7,
    title: "Quantum Forms",
    description:
        "Type-safe form library for React with schema validation, nested objects, dynamic fields, and zero re-render optimization.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    author: {
        name: "Elena Vasquez",
        avatar: "https://picsum.photos/seed/elena-vasquez/100/100",
    },
    github: "#",
    demo: "#",
    upvotes: "934",
},

{
    id: 8,
    featured: false,
    image: project8,
    title: "RustScript",
    description:
        "A Rust-based JavaScript runtime with native modules, 10x faster cold starts, and first-class WASM support.",
    tags: ["TypeScript", "Docker", "AI"],
    author: {
        name: "Kai Andersen",
        avatar: "https://picsum.photos/seed/kai-andersen/100/100",
    },
    github: "#",
    demo: "#",
    upvotes: "5.1k",
},

{
    id: 9,
    featured: false,
    image: project9,
    title: "Orbit CMS",
    description:
        "Headless CMS built for developers. Schema-based content modeling, type-safe client SDKs, and multi-region edge delivery.",
    tags: ["Node.js", "MongoDB", "TypeScript"],
    author: {
        name: "Fatima Al-Rashid",
        avatar: "https://picsum.photos/seed/fatima-al-rashid/100/100",
    },
    github: "#",
    demo: "#",
    upvotes: "1.7k",
},
];

export default projectData;