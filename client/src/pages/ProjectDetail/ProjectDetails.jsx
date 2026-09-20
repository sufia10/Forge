import projectdetailsbanner from "../../../src/assets/projectdetailsbanner.png";
import Vectordb from "../../components/VectorDB Head/Vectordb";
import "./projectdetails.css";

function ProjectDetails() {
    return (
        <div className="project-main">
            <div className="project-banner">
               < img src={projectdetailsbanner} alt="Project Details Banner" />
            </div>

            <Vectordb />
            <h1>Project Details</h1>
        </div>
    );
}

export default ProjectDetails;