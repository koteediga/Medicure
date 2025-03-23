import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as services from './../../services/Services';
import * as adminService from './../../services/AdminService';

function Doctors() {

    const [doctors, setDoctors] = useState([]);

    const fetchDoctors = async () => {
        const result = await services.getAllDoctors();
        setDoctors(result);
    }

    const deleteDoctor = async (id) => {
        if (window.confirm("Are you sure, you want to remove the doctor record??")) {
            const resp = await adminService.deleteDoctor(id);
            if(resp.statusCode >= 400) {
                toast.error(resp.message);
                return;
            }
            else {
                toast.success(resp.message);
                fetchDoctors();
                return;
            }
        }
    }

    useEffect(() => {
        fetchDoctors();
    }, [])
    

    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Manage Doctors</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Manage Doctors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-order-detail spacer-top-less spacer-bottom">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Manage Doctors</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cv-last-order">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Doctor name</th>
                                            <th>Doctor Email</th>
                                            <th>Department</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            doctors &&
                                            doctors.map((d, i) => (
                                                <tr key={i}>
                                                    <td>{d.name}</td>
                                                    <td>{d.email}</td>
                                                    <td>{d.department}</td>
                                                    <td>
                                                    {
                                                        d.password == null ?
                                                        <span>Inavtive</span> : 
                                                        <span>Active</span>
                                                    }
                                                    </td>
                                                    <td>
                                                        <a 
                                                            onClick={() => deleteDoctor(d.id)}
                                                            className="btn btn-danger">Remove</a>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
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

                        <Link to={"/add-doctor"} className="btn btn-primary">Add Doctor</Link>
                    </div>
                    <span>Showing 2 of {doctors.length} records</span>
                </div>
            </div>
        </Layout>
    )
}

export default Doctors