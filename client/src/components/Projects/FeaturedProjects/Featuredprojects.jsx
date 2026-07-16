import Headerbar from "../HeaderBar/Headerbar";
import Searchbar from "../Searchbar/Searchbar";
import Filterbar from "../Filterbar/Filterbar";
import ProjectCards from "../ProjectCard/Projectcards";


function Featuredprojects(){
    return(
        <div>
            <Headerbar />
            <Searchbar />
            <Filterbar />
            <ProjectCards />
            
        </div>
    );
}

export default Featuredprojects; 