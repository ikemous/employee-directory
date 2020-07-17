import React, {setState} from "react";
import Form from "../components/Form.js";


function Main()
{
    const [filter, setFilter] = useState("");
    return(
        <Form />
    );
};

export default Main;