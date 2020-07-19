import React from "react";

function SortButton({sortName, icon, setSort,sortHandler})
{
    return (
        <button 
            type="button" 
            name={sortName}
            onClick={setSort}
            aria-hidden="true"
            className={`fa fa-sort-${icon}-asc`}
        >
        </button>
            
    );
};

export default SortButton;