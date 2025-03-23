import Layout from './../Layout';
import {toast} from 'react-toastify';
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import * as services from '../../services/Services'
import * as authService from '../../services/AuthService'
import * as appointmentService from '../../services/AppointmentService'

function MakeAppointment() {
    const navigate = useNavigate();
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);

    // check user
    useEffect(() => {
        const currentUser = authService.getCurrentUser();
        if (currentUser == null) {
            toast.error("Login to access this route")
            navigate("/login");
        }
        else {
            const fetchDepartments = async () => {
                const depts = await services.getDepartments();
                setDepartments(depts);
            }

            fetchDepartments();
        }
    }, [])

    const [formValues, setFormValues] = useState({
        date: "",
        slot: "",
        reason: "",
        doctorId: 0
    });

    const [formErrors, setFormErrors] = useState({
        date: "",
        slot: "",
        reason: "",
        doctorId: 0
    });

    const handleChange = (e) => {
        
        const { name, value } = e.target;

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const result = await appointmentService.makeAppointment(formValues);
        console.log(result);

        if (result.statusCode >= 400) {
            setFormErrors(result.errors);
            toast.error(result.message);
            return ;
        }
        
        else {
            setFormValues({
                date: "",
                slot: "",
                reason: "",
                doctorId: 0
            });
            toast.success("appointment added successfully");
            navigate("/my-appointments", { replace : true })
            return ;
        }
        
    }


    const departmentSelected = (e) => {
        const fetchDoctors = async () => {
            const docs = await services.getDoctorsByDepartment(e.target.value);
            setDoctors(docs);
        }
        console.log(doctors);
        fetchDoctors();
    }

    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Make Appointment</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Make Appointment</li>
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
                                <h2 className="cv-sidebar-title">Make Appointment</h2>
                                <form onSubmit={handleFormSubmit}>

                                    <select
                                        onChange={departmentSelected}
                                    >
                                        <option value="">--SELECT DEPARTMENT--</option>
                                        {
                                            departments.map((data, idx) => (
                                                <option key={idx} value={data.name}>{data.name}</option>
                                            ))
                                        }
                                    </select>

                                    <select
                                        name='doctorId'
                                        value={formValues.doctorId}
                                        onChange={handleChange}
                                        className={formErrors && formErrors.doctorId != "" ? 'error' : ""}
                                    >
                                        <option value="">--SELECT DOCTOR--</option>
                                        {
                                            doctors &&
                                            doctors.map((d, idx) => (
                                                <option key={idx} value={d.id}>{d.name}</option>
                                            ))
                                        }
                                    </select>
                                    {
                                        formErrors && 
                                        formErrors.doctorId != "" ?
                                        <span className='text-danger'>{formErrors.doctorId}</span> :
                                        ""
                                    }

                                    <select
                                        name='slot'
                                        value={formValues.slot}
                                        onChange={handleChange}
                                        className={formErrors && formErrors.slot != "" ? 'error' : ""}
                                    >
                                        <option value="">--SELECT SLOT--</option>
                                        <option value="10:00AM-11:00AM">10:00AM-11:00AM</option>
                                        <option value="11:00AM-12:00PM">11:00AM-12:00PM</option>
                                        <option value="12:00PM-01:00PM">12:00PM-01:00PM</option>
                                        <option value="02:30PM-03:30PM">02:30PM-03:30PM</option>
                                        <option value="03:30PM-04:30PM">03:30PM-04:30PM</option>
                                    </select>
                                    {
                                        formErrors && 
                                        formErrors.slot != "" ?
                                        <span className='text-danger'>{formErrors.slot}</span> :
                                        ""
                                    }

                                    <input 
                                        name='date'
                                        type="date"
                                        value={formValues.date}
                                        onChange={handleChange}  
                                        className={formErrors && formErrors.date != "" ? 'error' : ""}   
                                    />
                                    {
                                        formErrors && 
                                        formErrors.date != "" ?
                                        <span className='text-danger'>{formErrors.date}</span> :
                                        ""
                                    }

                                    <textarea 
                                        name="reason"
                                        placeholder='Enter reason...'
                                        value={formValues.reason}
                                        className={formErrors && formErrors.reason != "" ? 'error' : ""}
                                        onChange={handleChange}></textarea>
                                        {
                                            formErrors && 
                                            formErrors.reason != "" ?
                                            <span className='text-danger'>{formErrors.reason}</span> :
                                            ""
                                        }

                                    <br />
                                    <button type="submit" className="cv-btn submitForm">Make Appointment</button>
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

export default MakeAppointment