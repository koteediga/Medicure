import React from 'react'
import Layout from '../Layout'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import * as medicineService from './../../services/MedicineService';

function ProductSingle() {

    const [search, setSearch] = useSearchParams();
    const [medicine, setMedicine] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const medicinesData = await medicineService.getMedicineById(search.get('medicineId'));
                setMedicine(medicinesData);
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
                                <h1>Product Single</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Product Single</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-product-single spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-81">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="cv-pro-thumb-img">
                                        <img src={medicine.imageUrl} alt="image" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="cv-prod-content">
                                        <h2 className="cv-price-title">{medicine.name}</h2>
                                        <p className="cv-pdoduct-price">{medicine.price}</p>

                                    </div>
                                    <div className="cv-prod-count">
                                        <Link to={`/place-order?medicineId=${medicine.id}`} className="cv-btn">
                                            Buy
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="cv-prod-text">
                                        {medicine.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductSingle