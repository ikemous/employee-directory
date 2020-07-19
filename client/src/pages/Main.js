import React, {useState, useEffect} from "react";
import Form from "../components/Form.js";
import Wrapper from "../components/Wrapper.js";
import Table from "../components/Table.js";
import Axios from "axios";


function Main()
{
    const [filter, setFilter] = useState("");
    const [query, setQuery] = useState("/employees");
    const [category, setCategory] = useState("");
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
            url: query,
            method:"GET"
        }).then(collections => {
            setEmployees(collections.data);
        }).catch(error => console.log(error));
    }, [query]);
    
    const submitHandler = event => {
        event.preventDefault();
        console.log("submited");
        if(filter && category)
        {
            setQuery(`/employees/${category}/${filter}`);
            setFilter("");
            setCategory("");
            return;
        }
        setQuery(`/employees`);

    };

    return(
        
        <Wrapper>
            <Form 
                filter={filter} 
                setFilter={event => setFilter(event.target.value)} 
                category={category} 
                setCategory={event => setCategory(event.target.value)}
                submitHandler={submitHandler}
            />
            <Table employees={employees} />
        </Wrapper>
    );
};

export default Main;