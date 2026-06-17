import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import useDataLoading from "../../hooks/useDataLoading";

const EmployeesList = () => {
    const { data: employees, error, isLoading } = useDataLoading("http://192.168.110.58/employees");


    return (
        <div>
            <h1>Сотрудники</h1>
            <ul>
                {employees?.map((employee) => (
                    <li>
                       <EmployeeCard employee={employee} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EmployeesList