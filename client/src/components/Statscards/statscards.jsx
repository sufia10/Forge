import StatsCard from "./statscard";
import "./statscards.css";
import statsData from "../../Data/statsdata";
import {FolderOpen, Users, Layers3, TrendingUp} from "lucide-react";

function Statscards(){

    const iconMap = {
         FolderOpen,
         Users,
         Layers3,
         TrendingUp
      };
   
   const cards = statsData.map((item, index) => {
     
      const Icon =iconMap[item.icon];

      return(
         <StatsCard 
         key = {index}
         icon = {Icon}
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