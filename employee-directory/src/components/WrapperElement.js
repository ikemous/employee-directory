import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Table from "./Table.js";

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
                    <Route path="/" component={Table}/>
                </div>
            </Router>
        );
    }
}

export default WrapperElement;