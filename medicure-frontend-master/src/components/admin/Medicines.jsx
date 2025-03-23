import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import * as medicineService from './../../services/MedicineService';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Medicines() {

    const [loading, setLoading] = useState(false);
    const [medicines, setMedicines] = useState([]);

    const fetchMedicines = async () => {
        const result = await medicineService.getMedicines();
        setMedicines(result);
    }

    useEffect(() => {
        fetchMedicines();
    }, [])

    const deleteMedicine = async (id) => {
        if (window.confirm("Are you sure want to delete Medicine??")) {
            setLoading(true);

            const result = await medicineService.deleteMedicine(id);
            setLoading(false);

            if (result.statusCode >= 400) {
                toast.error(result.message);
                return ;
            }
            else {
                toast.success(result.message);
                fetchMedicines();
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
                                <h1>Manage Medicines</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Manage Medicines</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-order-detail spacer-top-less spacer-bottom">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Manage Medicines</h1>
                        <p>
                            {
                                loading ?
                                <span>Deleting......</span> : 
                                ""
                            }
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cv-last-order">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price pre unit</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            medicines.map((m, i) => (
                                                <tr key={i}>
                                                    <td>{m.name}</td>
                                                    <td>{m.description}</td>
                                                    <td>{m.price}</td>
                                                    <td>
                                                        <a 
                                                            onClick={() => deleteMedicine(m.id)} 
                                                            className="btn btn-danger">
                                                            Delete
                                                        </a>
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

                        <Link to={"/add-medicine"} className="btn btn-primary">Add Medicine</Link>
                    </div>
                    <span>pages</span>
                </div>
            </div>
        </Layout>
    )
}

export default Medicines