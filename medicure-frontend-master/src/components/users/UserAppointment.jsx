import * as appointmentService from '../../services/AppointmentService'
import * as authService from '../../services/AuthService'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Layout from '../Layout'

function UserAppointment() {
    const [appointments, setAppointments] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    const fetchAppointments = async () => {
        const depts = await appointmentService.myAppointments()
        setAppointments(depts);
    }

    useEffect(() => {
        const user = authService.getCurrentUser();
        setCurrentUser(user);

        if (currentUser == null) {
            toast.error("Login to access this route")
            navigate("/login");
        }
        else {
            fetchAppointments();
        }
    }, [])

    const deleteAppointment = async (id) => {
        if (window.confirm("Are you sure, you want to delete the appointment??")) {
            const result = await appointmentService.deleteAppointment(id);

            if (result.statusCode >= 400) {
                toast.error(result.message);
                return ;
            }
            else {
                toast.success(result.message);
                fetchAppointments();
                return ;
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
                                <h1>Your Appointments</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Your Appointments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-order-detail spacer-top-less spacer-bottom">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Appointments details</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cv-last-order">
                                {
                                    currentUser.role == "USER" || currentUser.role == "ADMIN"
                                    ?
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Doctor name</th>
                                                <th>Doctor Email</th>
                                                <th>Doctor Department</th>
                                                <th>Date</th>
                                                <th>Slot</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                appointments.map((data, idx) => (
                                                    <tr key={idx}>
                                                        <td>{data.doctorName}</td>
                                                        <td>{data.doctorEmail}</td>
                                                        <td>{data.doctorDepartment}</td>
                                                        <td>{data.appointmentDate}</td>
                                                        <td>{data.appointmentSlot}</td>
                                                        <td>
                                                            <a
                                                                onClick={() => deleteAppointment(data.appointmentId)}
                                                                className="btn btn-danger">
                                                                Cancel
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    
                                    :
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Patient name</th>
                                                <th>Patient Email</th>
                                                <th>Reason</th>
                                                <th>Date</th>
                                                <th>Slot</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                appointments.map((data, idx) => (
                                                    <tr key={idx}>
                                                        <td>{data.patientName}</td>
                                                        <td>{data.patientEmail}</td>
                                                        <td>{data.reason}</td>
                                                        <td>{data.appointmentDate}</td>
                                                        <td>{data.appointmentSlot}</td>
                                                        <td>
                                                            <a 
                                                                onClick={() => deleteAppointment(data.appointmentId)}
                                                                className="btn btn-danger">
                                                                Cancel
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            
                                        </tbody>
                                    </table>
                                }
                            </div>
                        </div>
                    </div>
                    
                    {
                        currentUser.role == "USER" || currentUser.role == "ADMIN" 
                        ?
                        <>
                            <div className="d-flex justify-content-between mt-3">
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <a className="page-link">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                                <Link to={"/make-appointment"} className="btn btn-primary">Add Appointment</Link>
                            </div>
                            <span>pages</span>
                        </>
                        :
                        <span></span>
                    }
                    
                </div>
            </div>
        </Layout>
    )
}

export default UserAppointment