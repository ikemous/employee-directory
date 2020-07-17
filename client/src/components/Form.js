import React from "react";

function Form({filter, setFilter})
{
    return (
        <form className="input-group">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Filter By..." 
                aria-label="" 
                aria-describedby="basic-addon1" 
                name="filter"
                value={filter}
                onChange={setFilter}
            />
            <div className="input-group-append">
                <button className="btn btn-success" type="button">Filter</button>
            </div>
        </form>
    );
};

export default Form;