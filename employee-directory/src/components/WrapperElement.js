import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Table from "./Table.js";
import Form from "./Form.js";

class WrapperElement extends Component
{
    state = {
        filter: ""
    };

    handleSearch = event => {

    };

    handleChangeInput = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleChange

    render()
    {
        return (
            <Router>
                <div className="container">
                    <Route path="/">
                        <Form handleSearch={this.handleSearch} handleChangeInput={this.handleChangeInput} filter={this.state.filter} />
                        <Table />
                    </Route>
                </div>
            </Router>
        );
    }
}

export default WrapperElement;