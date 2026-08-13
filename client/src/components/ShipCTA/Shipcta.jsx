import { Zap, Plus } from "lucide-react";
import shipCTA from "../../Data/shipcta";
import "./shipcta.css";

function ShipCTA() {
    return (
        <section className="ship-cta-section">

            <div className="ship-cta-card">

                <div className="ship-cta-icon">
                    <Zap />
                </div>

                <h2>{shipCTA.title}</h2>

                <p className="ship-cta-subtitle">
                    {shipCTA.subtitle}
                </p>

                <div className="ship-cta-actions">

                    <button className="ship-cta-primary">
                        <Plus />
                        <span>{shipCTA.primaryButton}</span>
                    </button>

                    <button className="ship-cta-secondary">
                        {shipCTA.secondaryButton}
                    </button>

                </div>

            </div>

        </section>
    );
}

export default ShipCTA;