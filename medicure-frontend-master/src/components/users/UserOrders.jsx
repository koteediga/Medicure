import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import * as authService from '../../services/AuthService'
import * as orderService from '../../services/OrderService'
import { Link } from 'react-router-dom';

function UserOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            toast.error("Login to access this route")
            navigate("/login");
        }

        else {
            const fetchOrders = async () => {
                const data = await orderService.myOrders();
                setOrders(data);
            }
            
            console.log(orders);
            fetchOrders();
        }
    }, [])

    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Your Orders</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Your Orders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-order-detail spacer-top-less spacer-bottom">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Order details</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cv-last-order">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product name</th>
                                            <th>Phone number</th>
                                            <th>Address</th>
                                            <th>unit price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map((d, idx) => (
                                                <tr key={idx}>
                                                    <td>
                                                        <Link to={`/medicine-details?medicineId=${d.medicineId}`}>{d.medicineName}</Link>
                                                    </td>
                                                    <td>{d.phone}</td>
                                                    <td>{d.address}</td>
                                                    <td>{d.medicinePrice} Rs.</td>
                                                    <td>{d.quantity}</td>
                                                    <td>{d.totalPrice}</td>
                                                    <td>
                                                        <a href="#" className="btn btn-danger">Cancel</a>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserOrders