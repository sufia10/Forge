import PurpleIcon from "../../components/Global/PurpleIcon/Purpleicon";
import technologies from "../../Data/projectDetails";

function Vectordb() {
  return (
    <div className="project-details">
      
      <div className="technologies-list">

        {technologies.map((tech, index) => (
          <PurpleIcon key={index} text={tech} />
        ))}

      </div>
    </div>
  );
}
export default Vectordb;