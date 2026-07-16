import "./toast.css";

function Toast({ message, show }) {

    if (!show) return null;

    return (
        <div className="toast">
            <span className="toast-icon">✓</span>

            <div className="toast-content">
                <h4>{message}</h4>
            </div>
        </div>
    );
}

export default Toast;