import React, { useState } from 'react'
import Layout from './../Layout'
import * as authService from './../../services/AuthService';
import { useNavigate , Link} from 'react-router-dom';

import { toast } from 'react-toastify';

function Register() {

    const navigate = useNavigate();

    const [fromValues, setFromValues] = useState({
       name : "",
       email : "",
       password : "" 
    });
    
    const [formErrors, setFormErrors] = useState({
       name : "",
       email : "",
       password : "" 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFromValues({
            ...fromValues,
            [name] : value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormErrors({
            name: "",
            email: "",
            password : ""    
        });
        
        const result = await authService.register(fromValues);
        console.log(result);

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
                'password' : "",
                'email' : result.message
            })
            return ;
        }
        
        else {
            toast.success("regisration success");
            navigate("/login", { replace : true })
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
                                <h1>Register</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Register</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-login">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="cv-login-box">
                                <div className="cv-login-wlcm-box">
                                    <div className="cv-login-wlcm">
                                        <h2>Sign In</h2>
                                        <p>If you have a personal account, please sign in</p>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModel" data-bs-dismiss="modal" aria-label="Close" className="cv-btn">Sign in</a>
                                    </div>
                                </div>
                                <div className="cv-login-form">
                                    <h2>Create Account</h2>
                                    <p>Use your email for registration</p>
                                    <form onSubmit={handleFormSubmit}>
                                        <input 
                                            type="text" 
                                            name='name'
                                            value={fromValues.name}
                                            onChange={handleChange}
                                            placeholder="Full Name" 
                                            className={formErrors.name != "" ? 'error' : ""}
                                        />
                                        {
                                            formErrors.name != "" ?
                                            <span className='text-danger'>{formErrors.name}</span> :
                                            ""
                                        }

                                        <input 
                                            type="text" 
                                            name='email'
                                            value={fromValues.email}
                                            onChange={handleChange}
                                            placeholder="Email" 
                                            className={formErrors.email != "" ? 'error' : ""}
                                        />
                                        {
                                            formErrors.email != "" ?
                                            <span className='text-danger'>{formErrors.email}</span> :
                                            ""
                                        }

                                        <input 
                                            type="password" 
                                            name='password'
                                            value={fromValues.password}
                                            onChange={handleChange}
                                            placeholder="Password" 
                                            className={formErrors.password != "" ? 'error' : ""}
                                        />
                                        {
                                            formErrors.password != "" ?
                                            <span className='text-danger'>{formErrors.password}</span> :
                                            ""
                                        }

                                        <button className="cv-btn">Sign up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register