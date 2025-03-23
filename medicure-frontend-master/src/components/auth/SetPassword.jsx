import React, { useState } from 'react'
import Layout from '../Layout'
import * as authService from './../../services/AuthService';
import {toast} from 'react-toastify';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

function SetPassword() {
    const navigate = useNavigate();
    const [sp, setSp] = useSearchParams();
    const token = sp.get("token");
    console.log(token);
    
    const [formValues, setFormValues] = useState({
        password: "",
        password1: ""
    });
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value} = e.target
        setFormValues({
            ...formValues,
            [name] : value 
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formValues.password === "" || formValues.password1 === "") {
            setError("Both the passwords are required")
            return ;
        }
        else if (formValues.password !== formValues.password1) {
            setError("Both the passwords must match")
            return ;
        }
        else {
            const data = await authService.setPassword(formValues, token);

            if(data.statusCode >= 400) {
                toast.error(data.message);
                navigate("/login");
                return;
            }
            else {
                toast.success("Password updatted successfully");
                navigate("/login");
                return;
            }
        }
    }

    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Set Password</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Set Password</li>
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
                                <h2 className="cv-sidebar-title">Set Password</h2>
                                <form onSubmit={handleFormSubmit}>

                                    <input
                                        type="password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter password"
                                        className={error != "" ? 'error' : ""}
                                    />
                                    {
                                        error != "" ?
                                        <span className='text-danger'>{error}</span> :
                                        ""
                                    }

                                    <input
                                        name="password1"
                                        type="password"
                                        value={formValues.password1}
                                        onChange={handleInputChange}
                                        placeholder="Re Enter password"
                                        className={error != "" ? 'error' : ""}
                                    />
                                    {
                                        error != "" ?
                                        <span className='text-danger'>{error}</span> :
                                        ""
                                    }
                                    <br />

                                    <button type="submit" className="cv-btn submitForm">Submit</button>
                                    <div className="response"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SetPassword