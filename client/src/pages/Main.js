import React, {useState} from "react";
import Form from "../components/Form.js";


function Main()
{
    const [filter, setFilter] = useState("");

    return(
        <Form filter={filter} setFilter={event => setFilter(event.target.value)}/>
    );
};

export default Main;