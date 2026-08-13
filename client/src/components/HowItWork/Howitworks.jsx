import "./howitworks.css";
import Stepcards from "./StepCard/Stepcards";

function HowItWorks() {
    return (
        <div className="main-section">

            <div className="howitworks-header">
                <p className="howitworks-label">How it works</p>

                <h2>Built for builders who ship</h2>

                <p className="howitworks-subtitle">
                    From idea to community in three steps. No gatekeeping, no algorithm games.
                </p>
            </div>

            <Stepcards />

           

             
        </div>
    );
}

export default HowItWorks;