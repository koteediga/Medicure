const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function makeAppointment(data) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    data.userId = currentUser.id;

    try {
        
        const response = await fetch(`${BASE_URL}/appointment/make-appointment`, {
            method: "POST",
            body: JSON.stringify(data),
            headers:new Headers({
                'Authorization': `Bearer ${currentUser.token}`,
                "Content-Type": "application/json"
            })
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}

export async function myAppointments() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {        
        const response = await fetch(`${BASE_URL}/appointment/my-appointments`, {
            method: "GET",
            headers:new Headers({
                'Authorization': `Bearer ${currentUser.token}`
            })
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}

export async function deleteAppointment(appointmentId) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        
        const response = await fetch(`${BASE_URL}/appointment/delete/${appointmentId}`, {
            method: "DELETE",
            headers:new Headers({
                'Authorization': `Bearer ${currentUser.token}`,
                "Content-Type": "application/json"
            })
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}
