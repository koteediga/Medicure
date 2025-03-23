import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import * as authService from '../../services/AuthService'
import * as orderService from '../../services/OrderService'
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

function PlaceOrder() {
    const [sp, setSp] = useSearchParams();
    const medicineId = sp.get("medicineId");
    const navigate = useNavigate();
    
    // check user
    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            toast.error("Login to access this route")
            navigate("/login");
        }
    }, [])

    const [formValues, setFormValues] = useState({
        quantity: 0,
        phone: "",
        address: ""
    });
    
    const [formErrors, setFormErrors] = useState({
        quantity: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name] : value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormErrors({
            quantity: "",
            phone: "",
            address: ""
        });
        
        const result = await orderService.placeOrder(medicineId, formValues);
        console.log(result);

        if (result.statusCode >= 400) {
            setFormErrors(result.errors);
            toast.error(result.message);
            return ;
        }
        
        else {
            toast.success(result.message);
            navigate("/my-orders", { replace : true })
            return ;
        }
        
    }


    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Place Order</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Place Order</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-conatact spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cv-contact-form">
                                <h2 className="cv-sidebar-title">Place Order</h2>
                                <form onSubmit={handleFormSubmit}>

                                    <input
                                        type="text"
                                        name="quantity"
                                        value={formValues.quantity}
                                        onChange={handleChange}
                                        placeholder="Enter quantity"
                                        className={formErrors.quantity != "" ? 'error' : ""}
                                    />
                                    {
                                        formErrors.quantity != "" ?
                                        <span className='text-danger'>{formErrors.quantity}</span> :
                                        ""
                                    }

                                    <input
                                        name="phone"
                                        type="text"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        className={formErrors.phone != "" ? 'error' : ""}
                                    />
                                    {
                                        formErrors.phone != "" ?
                                        <span className='text-danger'>{formErrors.phone}</span> :
                                        ""
                                    }

                                    <textarea
                                        name="address"
                                        value={formValues.address}
                                        onChange={handleChange}
                                        placeholder="Enter address...."
                                        className={formErrors.address != "" ? 'error' : ""}
                                    ></textarea>
                                    {
                                        formErrors.address != "" ?
                                        <span className='text-danger'>{formErrors.address}</span> :
                                        ""
                                    }
                                    <br />

                                    <button type="submit" className="cv-btn submitForm">Place order</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PlaceOrder