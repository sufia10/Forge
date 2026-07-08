import "./statscard.css";

function StatsCard(props) {
    return(
         <div className="statscard-container">
            <div className="text-container">
                <div className="icon">
                 {props.icon}
                </div>

                <div className="gap">

                <h2>{props.number}</h2>
            <div className="statscard-p-one">
                 <p>{props.title}</p>
            </div>
             <div className="statscard-p-two">
                <p>{props.subtitle}</p>
                </div>
             </div>
    
            </div>
            
         </div>
    );
}

export default StatsCard;