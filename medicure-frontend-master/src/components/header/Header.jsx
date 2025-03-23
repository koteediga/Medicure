import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className="cv-main-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-9">
                        <div className="cv-logo">
                            <a href="index5.html"
                            ><img
                                    src="src/assets/images/logo.svg"
                                    alt="image"
                                    className="img-fluid"
                                /></a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-3">
                        <div className="cv-nav-bar">
                            <div className="cv-menu">
                                <ul>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/shop">Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">About</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/service">Service</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>

                                </ul>
                            </div>
                            <div className="cv-toggle-nav">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header