import { ArrowRight } from "lucide-react";
import "./headerbar.css";

function Headerbar(){
    return (
        <div className="headerbar-main">
            <div className="headerbar-left">
                <h1> Featured projects </h1>
                <p> Hand-picked by the community · 9 projects </p>
            </div>

              <div className="headerbar-view">
                  <p> View all </p>
                  
                     <ArrowRight size = {16}/>
                  
                 
              </div>
        </div>
    );
}

export default Headerbar;