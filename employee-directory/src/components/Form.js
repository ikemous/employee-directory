import React from "react";

function Form(props)
{
    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" />
            <div className="input-group-append">
                <button className="btn btn-success" type="button">Love it</button>
            </div>
        </div>
    );
};

export default Form;