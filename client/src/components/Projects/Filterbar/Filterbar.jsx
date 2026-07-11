import "./filterbar.css";
import { useState } from "react";

function Filterbar(){
    const filters = [
    "All",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AI",
    "Tailwind CSS"
];
   
const [activeFilter, setactiveFilter] = useState("All");
   
  const filterButtons = filters.map((item) => {
    return (
        
            <button key = {item} className= {
                activeFilter === item
                ? "filter-btn active"
                : "filter-btn"
                
            }
            onClick={()=> setactiveFilter(item)}>

                {item}
            </button>
        
    )
  })
   
    return(
        <div className="filter-container">
            {filterButtons}
        </div>
    );
}

export default Filterbar;