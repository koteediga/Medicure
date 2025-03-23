import * as adminService from '../../services/AdminService'
import * as authService from '../../services/AuthService'
import * as services from './../../services/Services';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Layout from './../Layout';

function Departments() {
    const navigate = useNavigate();
    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {
        const data = await services.getDepartments();
        setDepartments(data);
    }

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
            fetchDepartments();
        }
    }, [])

    const deleteDepartment = async (id) => {
        if (window.confirm("Are u sure, you want to delete the department??")) {
            const resp = await adminService.deleteDepartment(id);
            if (resp.statusCode >= 400) {
                toast.error(resp.message);
                return;
            }
            else {
                toast.success(resp.message);
                fetchDepartments();
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
                                <h1>Manage Departments</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Manage Departments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-order-detail spacer-top-less spacer-bottom">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Manage Departments</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cv-last-order">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>No Of Doctors</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            departments &&
                                            departments.map((d, i) => (
                                                <tr key={i}>
                                                    <td>{d.name}</td>
                                                    <td>{d.description}</td>
                                                    <td>{d.count}</td>
                                                    <td>
                                                        <a 
                                                            onClick={() => {deleteDepartment(d.id)}}
                                                            className="btn btn-danger">Delete</a>
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

                        <Link to={"/add-department"} className="btn btn-primary">Add Department</Link>
                    </div>
                    <span>pages</span>
                </div>
            </div>
        </Layout>
    )
}

export default Departments