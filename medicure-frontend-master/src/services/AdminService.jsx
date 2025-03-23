const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function addDoctor(data) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        const response = await fetch(`${BASE_URL}/admin/doctor`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
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

export async function addDeartment(data) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        const response = await fetch(`${BASE_URL}/admin/department`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
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

export async function deleteDepartment(id) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        const response = await fetch(`${BASE_URL}/admin/department/${id}`, {
            method: "DELETE",
            headers: new Headers({
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

export async function deleteDoctor(id) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        const response = await fetch(`${BASE_URL}/admin/doctor/${id}`, {
            method: "DELETE",
            headers: new Headers({
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

export async function changeSOrderStatus(id, orderStatus) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const data = {
        id: id,
        status: orderStatus
    };

    try {
        const response = await fetch(`${BASE_URL}/admin/change-order-status`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: new Headers({
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
