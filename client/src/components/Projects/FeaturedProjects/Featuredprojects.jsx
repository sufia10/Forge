import Headerbar from "../HeaderBar/Headerbar";
import Searchbar from "../Searchbar/Searchbar";
import Filterbar from "../Filterbar/Filterbar";
import ProjectCards from "../ProjectCard/Projectcards";
import Pagination from "../Pagination/Pagination";

function Featuredprojects(){
    return(
        <div>
            <Headerbar />
            <Searchbar />
            <Filterbar />
            <ProjectCards />
            <Pagination />
        </div>
    );
}

export default Featuredprojects; 