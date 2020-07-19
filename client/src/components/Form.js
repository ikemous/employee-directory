import React from "react";
import { Link } from "react-router-dom";

function Form({filter, setFilter})
{
    return (
        <form className="input-group" action={"/employees"}>
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
                <Link 
                    className="btn btn-success"
                    type="button"
                    to="/employees"
                    href="/employees"
                >
                    Filter
                </Link>
            </div>
        </form>
    );
};

export default Form;