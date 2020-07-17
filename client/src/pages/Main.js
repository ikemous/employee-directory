import React, {useState} from "react";
import Form from "../components/Form.js";
import Wrapper from "../components/Wrapper.js";
import Table from "../components/Table.js";


function Main()
{
    const [filter, setFilter] = useState("");
    const [results, setResults] = useState("");

    return(
        <Wrapper>
            <Form filter={filter} setFilter={event => setFilter(event.target.value)}/>
            <Table />
        </Wrapper>
    );
};

export default Main;