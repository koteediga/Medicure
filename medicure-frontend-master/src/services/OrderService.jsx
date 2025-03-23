const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function placeOrder(medicineId, data) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        data.userId = currentUser.id;
        data.medicineId = Number(medicineId);
        data.quantity = Number(data.quantity)
        console.log(data);
        
        const response = await fetch(`${BASE_URL}/orders/`, {
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

export async function myOrders() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        
        const response = await fetch(`${BASE_URL}/orders/`, {
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

export async function deleteOrder(orderId) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        
        const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
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
