import { Search, ChevronDown } from "lucide-react";
import { FilterIcon } from "lucide-react";
import "./searchbar.css"

function Searchbar(){
    return(
         <section className="searchbar-main">

    <div className="searchbar-search">
        <Search size={16} />

        <input
            type="text"
            placeholder="Search projects, developers, tech stacks..."
        />
    </div>

    <div className="searchbar-sort">
        <FilterIcon size={14} />

        <p>Sort: Trending</p>

        <ChevronDown size={14} />
    </div>

</section>
    );
}

export default Searchbar;