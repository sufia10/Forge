import Headerbar from "../HeaderBar/Headerbar";
import Searchbar from "../Searchbar/Searchbar";
import Filterbar from "../Filterbar/Filterbar";
import Projectcard from "../ProjectCard/Projectcard";
import Pagination from "../Pagination/Pagination";

function Featuredprojects(){
    return(
        <div>
            <Headerbar />
            <Searchbar />
            <Filterbar />
            <Projectcard />
            <Pagination />
        </div>
    );
}

export default Featuredprojects; 