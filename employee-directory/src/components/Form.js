import React from "react";
import {Link, useLocation} from "react-router-dom";

function Form(props)
{
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            <div className="input-group-append">
                <Link className="btn btn-success" type="button" to={"/filter/" + props.filter}>Love it</Link>
            </div>
        </div>
    );
};

export default Form;