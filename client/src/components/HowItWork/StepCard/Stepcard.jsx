import "./stepcard.css";

function Stepcard({ icon: Icon, numHeading, title, subtitle }) {
    return (
        <div className="step-card">

            <h2 className="step-number">
                {numHeading}
            </h2>

            <div className="step-icon">
                <Icon size={18} />
            </div>

            <p className="step-title">
                {title}
            </p>

            <p className="step-description">
                {subtitle}
            </p>

        </div>
    );
}

export default Stepcard;