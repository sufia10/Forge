import './marquee.css'

const techStack = [
       "Node.JS",
       "GraphQL",
       "React",
       "Python",
       "Tailwind CSS",
       "Next.JS",
       "Rust",
       "PostgreSQL",
       "MongoDB",
       "Docker",
       "Typescript",
       "Go",
       "Redis",
       "Firebase"
];

function Marquee() {


    const marqueeList = techStack.map((item, index) => {
        return (
            <div key={index} className="tech-list">
            <div className="dot"></div>
                <p>{item}</p>
            </div>
        );
    });
      

    return (
        <section className="marquee">
            <div className='marquee-track'>

            <div className='marqueeList'>
                 {marqueeList}
            </div>

            <div className='marqueeList'>
                 {marqueeList}
            </div>
            
            </div>
           
        </section>
    );
}

export default Marquee;
