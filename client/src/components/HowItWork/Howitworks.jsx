import "./howitworks.css"
import Stepcards from "./StepCard/Stepcards";

function HowItWorks(){
    return(
        <div className="main-section">
             <div>
            <p> How it works </p>
            <h2> Built for builders who ship</h2>
            <p>From idea to community in three steps. No gatekeeping, no algorithm games.</p>
        </div>

        <div>
            <Stepcards />
        </div>

        </div>
       
       
    );
}

export default HowItWorks;