import React from "react";
import { Link } from "react-router-dom";

function Form({filter, setFilter, category, setCategory, submitHandler})
{
    return (
        <div className="input-group">
            <select 
                className="custom-select mr-sm-2"
                name="category"
                value={category}
                onChange={setCategory}
            >
                <option></option>
                <option>department</option>
                <option>pay</option>
            </select>
            {(category)?
            <input 
                type="text" 
                className={"form-control"} 
                placeholder="Filter Value..." 
                aria-label="" 
                aria-describedby="basic-addon1"
                name="filter"
                value={filter}
                onChange={setFilter}
            />:
            <input 
                type="text" 
                className={"form-control"} 
                placeholder="Filter Value..." 
                aria-label="" 
                aria-describedby="basic-addon1" 
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
                    to={(category)?`/employees/${category}/${filter}`: "/employees"}
                >
                    Filter
                </Link>
            </div>
        </div>
    );
};

export default Form;