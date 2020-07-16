import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Table from "./Table.js";
import Form from "./Form.js";

class WrapperElement extends Component
{
    state = {
        filter: ""
    };

    handleClick = event => {
        const value = event.target.value();
        this.setState({
            filter: value
        });
    };

    render()
    {
        return (
            <Router>
                <div className="container">
                    <Route path="/">
                        <Form />
                        <Table />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default WrapperElement;