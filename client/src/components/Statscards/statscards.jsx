import StatsCard from "./statscard";
import "./statscards.css";
import {FolderOpen, Users, Layers3, TrendingUp} from "lucide-react";
const statsData = [
   {
      icon: <FolderOpen size = {18} />,
      number: "12,847",
      title: "Projects",
      subtitle: "+340 this week"
   },
   {
      icon: <Users size = {18} />,
      number: "8,392",
      title: "Developers",
      subtitle: "+128 this week"
   },
   {
      icon: <Layers3 size = {18} />,
      number: "340+",
      title: "Tech Stacks",
      subtitle: "Across all projects"
   },
   {
      icon: <TrendingUp size = {18} />,
      number: "1.2M",
      title: "Total Upvotes",
      subtitle: "+14k this week"
   }
];

function Statscards(){
   
   const cards = statsData.map((item, index) => {
      return(
         <StatsCard 
         key = {index}
         icon = {item.icon}
         number = {item.number}
         title = {item.title}
         subtitle = {item.subtitle}
         />
      )
   }
);
    return (
      <section>
          <div className="card-arrangement">
            {cards}
          </div>
      </section>
    )
}

export default Statscards;