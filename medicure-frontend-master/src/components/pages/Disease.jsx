import React from 'react'
import Layout from './../Layout';
import { Link } from 'react-router-dom';

function Disease() {
    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Diseases</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Diseases</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer-top ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-feature-box">
                                <div className="cv-feature-text">
                                    <Link className="fs-4 text-dark fw-bold" to={"/disease-single?type=Lungs"}>Lung Cancer</Link>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-feature-box">
                                <div className="cv-feature-text">
                                    <Link className="fs-4 text-dark fw-bold" to={"/disease-single?type=Eye"}>Eye Disease</Link>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-feature-box">
                                <div className="cv-feature-text">
                                    <Link className="fs-4 text-dark fw-bold" to={"/disease-single?type=Brain"}>Brain Tumor</Link>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-feature-box">
                                <div className="cv-feature-text">
                                    <Link className="fs-4 text-dark fw-bold" to={"/disease-single?type=Skin"}>Skin Cancer</Link>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                    <p>100% safe and secure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Disease