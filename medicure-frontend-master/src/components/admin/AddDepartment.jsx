import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom'
import * as adminService from "./../../services/AdminService";
import * as authService from "./../../services/AuthService";

function AddDepartment() {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        name: "",
        description: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const [formErrors, setFormErrors] = useState({
        name: "",
        description: ""
    });

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            toast.error("Login to access this route")
            navigate("/login");
        }

        else if (currentUser.role != 'ADMIN') {
            toast.error("No access this route")
            navigate("/error-403");
        }
    }, [])

    const handleFormSubmit = async (e) => {
        console.log(formValues);
        console.log(formErrors);
        e.preventDefault();
        setFormErrors({
            name: "",
            description: ""
        });
        
        const result = await adminService.addDeartment(formValues);
        console.log(result);

        if (result.statusCode == 409) {
            setFormErrors({
                name: "Department already exists",
                description: ""
            });
            toast.error(result.message);
            return ;
        }
        
        else if (result.statusCode >= 400) {
            setFormErrors(result.errors);
            toast.error(result.message);
            return ;
        }
        
        else {
            setFormValues({
                name: "",
                description: ""
            });

            setFormErrors({
                name: "",
                description: ""
            });

            toast.success("Department Added successfully");
            navigate("/manage-department")
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
                                <h1>Add Department</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Add Department</li>
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
                                <h2 className="cv-sidebar-title">Add Department</h2>
                                <form onSubmit={handleFormSubmit}>
                                    <input 
                                        name='name'
                                        type="text" 
                                        placeholder="Department name" 
                                        onChange={handleInputChange}
                                        className={formErrors.name && formErrors.name != "" ? 'error' : ""}
                                    />
                                    {
                                        formErrors.name &&
                                        formErrors.name != "" ?
                                        <span>{formErrors.name}</span> :
                                        <></>
                                    }

                                    <textarea
                                        name="description"
                                        placeholder="Enter Description...."
                                        onChange={handleInputChange}
                                        className={formErrors.description && formErrors.description != "" ? 'error' : ""}
                                    ></textarea>
                                    {
                                        formErrors.description &&
                                        formErrors.description != "" ?
                                        <span>{formErrors.description}</span> :
                                        <></>
                                    }

                                    <br />

                                    <button type="submit" className="cv-btn submitForm">Add Department</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddDepartment