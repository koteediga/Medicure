import React, { useState } from 'react'
import Layout from '../Layout'
import * as authService from './../../services/AuthService';
import {toast} from 'react-toastify';
import {useNavigate,Link} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        username: "",
        password : ""    
    });
    
    const [formErrors, setFormErrors] = useState({
        username: "",
        password : ""    
    });

    const handleInputChange = (e) => {
        const { name, value} = e.target
        setFormValues({
            ...formValues,
            [name] : value 
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormErrors({
            username: "",
            password : ""    
        });
        
        const result = await authService.login(formValues);
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
        
        else {
            toast.success("login success");
            localStorage.setItem("currentUser", JSON.stringify(result))
            navigate("/", { replace : true })
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
                                <h1>Login</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Login</li>
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
                                        <h2>Sign Up</h2>
                                        <p>If you don't have a personal account please sign up</p>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#signUpModal" data-bs-dismiss="modal" aria-label="Close" className="cv-btn">Sign up</a>
                                    </div>
                                </div>
                                <div className="cv-login-form">
                                    <h2>Sign in to your account</h2>
                                    <p>Use your email for login</p>
                                    <form onSubmit={handleFormSubmit}>
                                        <input 
                                            name='username' 
                                            type="text" 
                                            placeholder="Email" 
                                            value={formValues.username}
                                            onChange={handleInputChange}
                                            className={formErrors.username != "" ? 'error' : ""}
                                        />
                                        {
                                            formErrors.username != "" ?
                                            <span className='text-danger'>{formErrors.username}</span> :
                                            ""
                                        }

                                        <input 
                                            name='password'
                                            type="password" 
                                            placeholder="Password" 
                                            value={formValues.password}
                                            onChange={handleInputChange}
                                            className={formErrors.password != "" ? 'error' : ""}
                                        />
                                        {
                                            formErrors.password != "" ?
                                            <span className='text-danger'>{formErrors.password}</span> :
                                            ""
                                        }

                                        <a className="pa-forgot-password" >Forgot your password?</a>
                                        <button type='submit' className="cv-btn">Sign in</button>
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

export default Login