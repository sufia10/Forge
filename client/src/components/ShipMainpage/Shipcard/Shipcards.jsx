import "./shipcards.css";
import { Star } from "lucide-react";

import shipCards from "../../../Data/shippage";
import Shipcard from "./Shipcard";

function Shipcards() {

    const iconMap = {
        star: Star
    };

    const cards = shipCards.map((item) => {

        const Icon = iconMap[item.icon];

        return (
            <Shipcard
                key={item.id}
                icon={Icon}
                paragraph={item.paragraph}
                author={item.author}
                subtitle={item.subtitle}
            />
        );
    });

    return (
        <div className="ship-cards-container">
            {cards}
        </div>
    );
}

export default Shipcards;