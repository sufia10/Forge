import projectdetailsbanner from "../../../src/assets/projectdetailsbanner.png";
import "./projectdetails.css";

function ProjectDetails() {
    return (
        <div className="project-main">
            <div className="project-banner">
               < img src={projectdetailsbanner} alt="Project Details Banner" />
            </div>
            
            <h1>Project Details</h1>
        </div>
    );
}

export default ProjectDetails;