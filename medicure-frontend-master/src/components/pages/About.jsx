import React from 'react'
import Layout from '../Layout'
import { Link } from "react-router-dom";

function About() {
    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>About Us</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="cv-about-img spacer-top">
                                <img
                                    src="src/assets/images/about.png"
                                    alt="image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="cv-about-content">
                                <p>
                                     We are a dedicated team of innovators, engineers, and healthcare professionals committed to revolutionizing the field of medical diagnosis through cutting-edge technology.
                                      Our mission is to leverage artificial intelligence and machine learning to create a reliable, efficient, and user-friendly system that enhances the accuracy of disease diagnosis and improves patient outcomes.
                                </p>
                                <h2>Our Expertise</h2>
                                <ul>
                                    <li>Heart Surgery</li>
                                    <li>Eye Surgery</li>
                                    <li>Brain Hemorrhage</li>
                                    <li>Respiratory problems</li>
                                    <li>Internal Injury</li>
                                    <li>Cancer disease</li>
                                    <li>Neurologist</li>
                                    <li>Heart Surgery</li>
                                    <li>Eye Surgery</li>
                                    <li>Brain Hemorrhage</li>
                                    <li>Dental Problem</li>
                                    <li>Respiratory problems</li>
                                    <li>Internal Injury</li>
                                    <li>Cancer disease</li>
                                    <li>Neurologist</li>
                                    <li>Dental Problem</li>
                                </ul>
                                <div className="cv-dr-box">
                                    <div className="cv-dr-name">
                                        <h3>Dr. Martin Guptil</h3>
                                        <p>Heart Surgeon</p>
                                    </div>
                                    <div className="cv-dr-signature">
                                        <img
                                            src="src/assets/images/signature.png"
                                            alt="image"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv-team spacer-top-less">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Our team</h1>
                        <p>
                        Together, we are committed to delivering a transformative solution that empowers
                         healthcare providers with the tools they need to diagnose diseases accurately and 
                        efficiently, ultimately improving patient care and health outcomes.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team1.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>Chandra Sekhar</h2>
                                    <p>21MIC7143</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team2.jpeg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>Koteswararao</h2>
                                    <p>21MIC7195</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team3.jpg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>Chenna Kesava Rao </h2>
                                    <p>21MIC7207</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team4.jpg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>Nikki Johnson</h2>
                                    <p>Neurologist</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About