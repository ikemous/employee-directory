import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Table from "./Table.js";
import Form from "./Form.js";

class WrapperElement extends Component
{
    state = {
        filter: ""
    };

    render()
    {
        return (
            <Router>
                <div>
                    <Route path="/" component={Form}/>
                </div>
            </Router>
        );
    }
}

export default WrapperElement;