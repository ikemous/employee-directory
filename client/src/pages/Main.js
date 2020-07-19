import React, {useState, useEffect} from "react";
import Form from "../components/Form.js";
import Wrapper from "../components/Wrapper.js";
import Table from "../components/Table.js";
import Axios from "axios";


function Main()
{
    const [filter, setFilter] = useState("");
    // const [query, setQuery] = useState(`/employees`);
    const [employees, setEmployees] = useState([
        {
            id: 0,
            firstname: "",
            lastname: "",
            department: "",
            pay: ""
        }
    ]);

    useEffect(() => {
        Axios({
            url:"/employees",
            method:"GET"
        }).then(collections => {
            setEmployees(collections.data);
        }).catch(error => console.log(error));
    }, [filter]);  
    
    return(
        
        <Wrapper>
            <Form filter={filter} setFilter={event => setFilter(event.target.value)} />
            <Table employees={employees} />
        </Wrapper>
    );
};

export default Main;