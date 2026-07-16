import "./pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [...Array(totalPages).keys()].map(
        (number) => number + 1
    );
    return (
        <div className="pagination-style">

             <button className="arrowBtn"
                onClick={()=> onPageChange(currentPage-1)}
                disabled = {currentPage ===1}>
                   <ChevronLeft size = {16}/>
                </button>
            
            
            {pageNumbers.map((page) => (
                    <button
                    key={page}
                    className={
                        currentPage === page
                            ? "pagination-btn active"
                            : "pagination-btn"
                    }
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
               
                )
            )}
            <button className="arrowBtn"
                onClick={()=>onPageChange(currentPage+1)}
                disabled={currentPage===totalPages}>
                     <ChevronRight size={16}/>
                </button>

        </div>
    );
}

export default Pagination;