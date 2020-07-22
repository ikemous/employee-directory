import React from "react";
import EmployeeRow from "./EmployeeRow.js";
import TableHead from "./TableHead.js";

function Table({employees, setSort, sortHandler})
{   
    return (
        <div className="row">
            <table className="table">
                <thead>
                    <TableHead setSort={setSort} sortHandler={sortHandler} />
                </thead>
                <tbody>
                {employees.map(employee => {
                    return (
                        <EmployeeRow key={employee.id} {...employee} />
                    );
                })}
                </tbody>
            </table>
            
        </div>
    );
};

export default Table;