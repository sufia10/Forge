import { Terminal, GitBranch, Users } from "lucide-react";
import HowCards from "../../../Data/Howitworks";
import Stepcard from "./Stepcard";
import "./stepcards.css";

function Stepcards() {

    const iconMap = {
        Terminal,
        GitBranch,
        Users
    };

    const howCard = HowCards.map((item) => {

        const Icon = iconMap[item.icon];

        return (
            <Stepcard
                key={item.id}
                numHeading={item.numHeading}
                icon={Icon}
                title={item.title}
                subtitle={item.subtitle}
            />
        );
    });

    return (
        <div className="step-cards-container">
            {howCard}
        </div>
    );
}

export default Stepcards;