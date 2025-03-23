import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import {useNavigate, Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import * as authService from '../../services/AuthService'
import * as adminService from '../../services/AdminService'
import * as services from './../../services/Services';
import FadeLoader from 'react-spinners/FadeLoader';

function AddDoctor() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [departments, setDepartments] = useState([]);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        department: ""
    });

    const [formErrors, setFormErrors] = useState({
        name : "",
        email : "",
        department : "" 
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

        else {
            const fetchDepartments = async () => {
                const data = await services.getDepartments();
                setDepartments(data);
            }

            fetchDepartments();
        }
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        setLoading(true);

        e.preventDefault();
        setFormErrors({
            name: "",
            email: "",
            department : ""    
        });
        
        const result = await adminService.addDoctor(formValues);
        console.log(result);
        setLoading(false);

        if (result.statusCode == 400) {
            setFormErrors(result.errors);
            toast.error(result.message);
            return ;
        }
        
        if (result.statusCode == 401) {
            toast.error(result.message)
            return ;
        }
        
        if (result.statusCode == 409) {
            toast.error(result.message)
            setFormErrors({
                'name' : "",
                'department' : "",
                'email' : result.message
            })

            return ;
        }
        
        else {
            setFormValues({
                name: "",
                email: "",
                departments: ""
            });

            toast.success("Doctor Added successfully");
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
                                <h1>Add Doctor</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Add Doctor</li>
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
                                <h2 className="cv-sidebar-title">Add Doctor</h2>
                                <form onSubmit={handleFormSubmit}>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter name"
                                        className={formErrors.name != "" ? 'error' : ""}
                                    />
                                    {
                                        formErrors.name != "" ?
                                        <span className='text-danger'>{formErrors.name}</span> :
                                        ""
                                    }

                                    <input
                                        name="email"
                                        type="text"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter email"
                                        className={formErrors.email != "" ? 'error' : ""}
                                    />
                                    {
                                        formErrors.email != "" ?
                                        <span className='text-danger'>{formErrors.email}</span> :
                                        ""
                                    }

                                    <select
                                        name='department'
                                        value={formValues.department}
                                        onChange={handleInputChange}
                                        className={formErrors.department != "" ? 'error' : ""}
                                    >
                                        <option value="">SELECT DEPARTMENT</option>
                                        {
                                            departments.map((d, i) => (
                                                <option key={i} value={d.name}>{d.name}</option>
                                            ))
                                        }
                                    </select>
                                    {
                                        formErrors.department != "" ?
                                        <span className='text-danger'>{formErrors.department}</span> :
                                        ""
                                    }

                                    <br />
                                    {
                                        loading ?
                                            <div className='d-flex align-items-center'>
                                                <FadeLoader color={'#3cbcff'} loading={loading} />
                                                <span className='text-clr fs-4 fw-bold'>Adding...</span>
                                            </div>
                                            :
                                            <button type="submit" className="cv-btn submitForm">Add Doctor</button>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddDoctor