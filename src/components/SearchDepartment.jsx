import { useForm } from "../Hooks/UseForm";
import { getCurrentDepartment } from "../api/departmentapi";

const SearchDepartment = ({ setDepartments }) => {
    const [values, handleInputChange, reset] = useForm({
        department: ''
    });

    const handleSearchDepartment = async () => {
        if (values.department.trim() === '') {
            // Podrías mostrar un mensaje de error aquí indicando que el campo está vacío
            return;
        }

        try {
            const data = await getCurrentDepartment(values.department);
            if (data) {
                setDepartments([data]); // Convertimos el objeto en un array con un solo elemento
            } else {
                setDepartments([]);
            }
        } catch (error) {
            console.error("Error searching department:", error);
            // Podrías mostrar un mensaje de error aquí para informar al usuario sobre el problema
        }

        reset();
    };

    const handleRefreshPage = () => {
        window.location.reload(); // Refrescar la página
    };

    return (
        <div className="input-group">
            <button className="refresh-button" onClick={handleRefreshPage}>Department: </button>

            <input
                className="form-control"
                type="text"
                name="department"
                onChange={handleInputChange}
                id="department"
                value={values.department}
                placeholder="Enter department ID"
                aria-label="Department ID"
            />
            <button
                type="button"
                onClick={handleSearchDepartment}
                className="btn btn-primary">
                Search
            </button>
        </div>
    );
};

export default SearchDepartment;
