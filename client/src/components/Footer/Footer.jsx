import "./footer.css";
import {
    Code2,
    Send,
    Users,
    Mail
} from "lucide-react";

import footerdata from "../../Data/footerdata";

function Footer() {

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">

                    <div className="footer-logo">
                        <div className="footer-logo-icon">
                            <Code2 size={16} />
                        </div>

                        <span>Forge</span>
                    </div>

                    <p className="footer-description">
                        The developer community for
                        <br />
                        builders who ship.
                    </p>

                    <div className="footer-socials">

    <a href="#" className="social-icon">
        <Send size={16} />
    </a>

    <a href="#" className="social-icon">
        <Code2 size={16} />
    </a>

    <a href="#" className="social-icon">
        <Users size={16} />
    </a>

    <a href="#" className="social-icon">
        <Mail size={16} />
    </a>

</div>

                </div>


                <div className="footer-column">

                    <h4>PRODUCT</h4>

                    {footerdata.product.map((item) => (
                        <a href="#" key={item}>
                            {item}
                        </a>
                    ))}

                </div>


             
                <div className="footer-column">

                    <h4>DEVELOPERS</h4>

                    {footerdata.developers.map((item) => (
                        <a href="#" key={item}>
                            {item}
                        </a>
                    ))}

                </div>


              
                <div className="footer-column">

                    <h4>COMPANY</h4>

                    {footerdata.company.map((item) => (
                        <a href="#" key={item}>
                            {item}
                        </a>
                    ))}

                </div>


              
                <div className="footer-column">

                    <h4>LEGAL</h4>

                    {footerdata.legal.map((item) => (
                        <a href="#" key={item}>
                            {item}
                        </a>
                    ))}

                </div>

            </div>


        
            <div className="footer-bottom">

                <p>
                    © 2024 Forge, Inc. All rights reserved.
                </p>

                <div className="system-status">
                    <span className="status-dot"></span>
                    <span>All systems operational</span>
                </div>

            </div>

        </footer>
    );
}

export default Footer;