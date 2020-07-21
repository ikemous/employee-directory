import React from "react";
import EmployeeRow from "./EmployeeRow.js";
import SortButton from "./SortButton.js";

function Table({employees, setSort, sortHandler})
{   
    return (
        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">
                        First Name
                        <SortButton sortName="firstname" icon="alpha" setSort={setSort} sortHandler={sortHandler}/>
                    </th>
                    <th scope="col">
                        Last Name
                        <SortButton sortName="lastname" icon="alpha"  setSort={setSort} />
                    </th>
                    <th scope="col">
                        Pay 
                       <SortButton sortName="pay" icon="numeric" setSort={setSort} />
                    </th>
                    <th scope="col">
                        Department
                        <SortButton sortName="department" icon="alpha" setSort={setSort} />
                    </th>
                    <th scope="col">
                        Manager
                    </th>
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
            
        </div>
    );
};

export default Table;