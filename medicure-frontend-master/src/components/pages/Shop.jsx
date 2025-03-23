import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import * as medicineService from './../../services/MedicineService';
import { Link } from "react-router-dom";

function Shop() {
    const [medicines, setMedicines] = useState([]);

    // useEffect(() => {
    //     const currentUser = authService.getCurrentUser();
    //     if (currentUser == null) {
    //         toast.error("Login to access this route")
    //         navigate("/login");
    //     }
    // }, [])

    useEffect(() => {
        async function fetchData() {
            try {
                const medicinesData = await medicineService.getMedicines();
                setMedicines(medicinesData);
            } catch (error) {

                console.error('Error fetching medicines:', error);
            }
        }

        fetchData();

    }, []);



    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Shop</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Shop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-shop">
                <div className="container">
                    <div className="row">
                        <div className="cv-shop-box">
                            <div className="cv-shop-title">
                                <h2 className="cv-sidebar-title">Showing results</h2>
                                <p><span>Total : </span>{medicines.length}</p>
                            </div>
                            <div className="row">
                                {
                                    medicines.length != 0 ?
                                    medicines.map((medicine, idx) => (
                                        <div key={idx} className="col-lg-3 col-sm-6">
                                            <div className="cv-product-box">
                                                <div className="cv-product-img">
                                                    <img src={medicine.imageUrl} alt="image" className="img-fluid" />
                                                </div>
                                                <div className="cv-product-data">
                                                    <Link to={`/medicine-details?medicineId=${medicine.id}`} className="cv-price-title">{medicine.name}</Link>
                                                    <p className="cv-pdoduct-price">{medicine.price} Rs.</p>
                                                    <Link to={`/place-order?medicineId=${medicine.id}`} className="cv-price-cart"> Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <span>No Medicine avalible</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Shop