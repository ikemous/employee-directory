import React from "react";

function Form({filter, setFilter})
{
    return (
        <div className="input-group">
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
                <button className="btn btn-success" type="button">Love it</button>
            </div>
        </div>
    );
};

export default Form;