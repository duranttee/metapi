export const getDepartments = async () => {
    const url = "https://collectionapi.metmuseum.org/public/collection/v1/departments";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error fetching departments");
        }
        const data = await response.json();
        return data.departments;
    } catch (error) {
        console.error("Error fetching departments:", error);
        return [];
    }
};

export const getCurrentDepartment = async (departmentId) => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/departments`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching department with ID ${departmentId}`);
        }
        const data = await response.json();
        const department = data.departments.find(dept => dept.departmentId === parseInt(departmentId));
        if (!department) {
            throw new Error(`Department with ID ${departmentId} not found`);
        }
        return department;
    } catch (error) {
        console.error("Error fetching department:", error);
        return null;
    }
};
