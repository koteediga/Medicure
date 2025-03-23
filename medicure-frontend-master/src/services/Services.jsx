const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getDepartments() {    
    try {
        const response = await fetch(`${BASE_URL}/home/departments`);
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}

export async function getDoctorsByDepartment(dept) {    
    try {
        const response = await fetch(`${BASE_URL}/home/doctors?department=${dept}`);
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}

export async function getAllDoctors() {    
    try {
        const response = await fetch(`${BASE_URL}/home/doctors`);
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}
