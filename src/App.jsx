import React, { useState, useEffect } from "react";
import DepartmentCard from "./components/DepartmentCard";
import SearchDepartment from "./components/SearchDepartment";
import { getDepartments } from "./api/departmentapi";
import './assets/css/index.css'; // Asegúrate de importar el archivo CSS

const App = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const data = await getDepartments();
                setDepartments(data);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };

        fetchDepartments();
    }, []);

    return (
        <div className="container">
            <h1>Departments</h1>
            <hr />
            <SearchDepartment setDepartments={setDepartments} />
            <hr />
            <div className="card-container">
                {departments.map((department) => (
                    <DepartmentCard key={department.departmentId} departmentId={department.departmentId} />
                ))}
            </div>
        </div>
    );
};

export default App;
