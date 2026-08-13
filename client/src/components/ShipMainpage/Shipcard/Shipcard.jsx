import "./shipcard.css";

function Shipcard({
    icon: Icon,
    paragraph,
    author,
    subtitle
}) {
    return (
        <div className="ship-card">

            <div className="ship-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                        key={star}
                        size={16}
                        fill="currentColor"
                    />
                ))}
            </div>

            <p className="ship-quote">
                "{paragraph}"
            </p>

            <div className="ship-divider"></div>

            <div className="ship-person">

                <img
                    src={author.avatar}
                    alt={author.name}
                    className="ship-avatar"
                />

                <div className="ship-person-info">

                    <h3>{author.name}</h3>

                    <p>{subtitle}</p>

                </div>

            </div>

        </div>
    );
}

export default Shipcard;