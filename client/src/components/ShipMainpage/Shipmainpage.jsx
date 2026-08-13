import "./shipmainpage.css";
import Shipcards from "./Shipcard/Shipcards";

function Shipmainpage() {
    return (
    <div>
         <div className="section-divider"></div>
         <section className="ship-main-section">
            
            <div className="ship-heading">
                <h2>Trusted by engineers who ship</h2>

                <p>
                    From indie makers to engineers at top companies
                </p>
            </div>

            <Shipcards />
         
        </section>
    </div>
        
    );
}

export default Shipmainpage;