import React from "react";

function Wrapper({children})
{
    return(
        <div className="container" style={{marginTop:15}}>
            {children}
        </div>
    )
};

export default Wrapper;