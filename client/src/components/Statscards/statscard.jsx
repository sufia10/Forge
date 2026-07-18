import "./statscard.css";

function StatsCard({ icon: Icon, number, title, subtitle }) {
    return (
        <div className="statscard-container">
            <div className="text-container">
                <div className="icon">
                    <Icon size={18} />
                </div>
                <div className = "gap">
                     <h2>{number}</h2>
                </div>
                
                <div className="statscard-p-one">
                    <p>{title}</p>
                </div>
              
                <div className="statscard-p-two">
                    <p>{subtitle}</p>
                </div>
                
            </div>
        </div>
    );
}
export default StatsCard;