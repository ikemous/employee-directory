import React from "react";
import { Link } from "react-router-dom";

function Form({filter, setFilter, category, setCategory, submitHandler})
{
    return (
        <div className="input-group row">
            <select 
                className="custom-select col-sm-6"
                name="category"
                value={category}
                aria-label="selectInput" 
                aria-describedby="selectInput"
                onChange={setCategory}
            >
                <option></option>
                <option>department</option>
                <option>pay</option>
            </select>
            {(category)?
            <input 
                type="text" 
                className="form-control col-sm-6"
                placeholder="Filter Value..." 
                aria-label="enabledFilter" 
                aria-describedby="enabledFilter"
                name="filter"
                value={filter}
                onChange={setFilter}
            />:
            <input 
                type="text" 
                className="form-control col-sm-6" 
                placeholder="Filter Value..." 
                aria-label="disabledForm" 
                aria-describedby="disabledFilter" 
                name="filter"
                value={filter}
                onChange={setFilter}
                disabled
            />
            }
            <div className="input-group-append">
                <Link 
                    onClick={submitHandler}
                    className="btn btn-success"
                    type="button"
                    aria-label="filterButton" 
                    to={(category)?`/employees/${category}/${filter}`: "/employees"}
                >
                    Filter
                </Link>
            </div>
        </div>
    );
};

export default Form;