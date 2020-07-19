import React from "react";
import EmployeeRow from "./EmployeeRow.js";

function Table({employees})
{   
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Pay</th>
                    <th scope="col">Department</th>
                    <th scope="col">Manager</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map(employee => {
                    return (
                        <EmployeeRow key={employee.id} {...employee} />
                    );
                })}
                </tbody>
            </table>
            
        </>
    );
};

export default Table;