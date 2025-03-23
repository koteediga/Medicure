import React from 'react'
import Layout from '../Layout'

function Home() {

    return (
        <Layout>
            <div className="cv-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cv-banner-text">
                                <p className="cv-banner-cat">Medical personal protective equipment PPE </p>
                                <h1>Disease Diagnosis</h1>
                                <p>
                                    The Disease Diagnosis component of our AI/ML-Based Disease Diagnosis and Medicine 
                                    Delivery System is designed to revolutionize the diagnostic process by leveraging 
                                    advanced artificial intelligence and machine learning technologies</p>
                                <button className="cv-btn">Shop now</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cv-banner-img">
                                <img src="src/assets/images/banner1.png" alt="images" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-arrival spacer-top-less">
                <div className="container">
                    <div className="cv-heading">
                        <h1>New arrivals</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <div className="row">

                        <div className="col-lg-3 col-sm-6">
                            <div className="cv-product-box">
                                <div className="cv-product-img">
                                    <img src="src/assets/images/cart1.jpg" alt="image" className="img-fluid" />
                                </div>
                                <div className="cv-product-data">
                                    <a href="https://kamleshyadav.com/html/medical-equipments/html/product-single.html"
                                        className="cv-price-title">Medicine Name</a>
                                    <p className="cv-pdoduct-price">Price</p>
                                    <a href="#" className="cv-price-cart">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <g>
                                                <path d="M507.519,116.384C503.721,111.712,498.021,109,492,109H129.736l-1.484-13.632l-0.053-0.438C121.099,40.812,74.583,0,20,0
                                                    C8.954,0,0,8.954,0,20s8.954,20,20,20c34.506,0,63.923,25.749,68.512,59.928l23.773,218.401C91.495,327.765,77,348.722,77,373
                                                    c0,0.167,0.002,0.334,0.006,0.5C77.002,373.666,77,373.833,77,374c0,33.084,26.916,60,60,60h8.138
                                                    c-2.034,5.964-3.138,12.355-3.138,19c0,32.532,26.467,59,59,59s59-26.468,59-59c0-6.645-1.104-13.036-3.138-19h86.277
                                                    c-2.034,5.964-3.138,12.355-3.138,19c0,32.532,26.467,59,59,59c32.533,0,59-26.468,59-59c0-32.532-26.467-59-59-59H137
                                                    c-11.028,0-20-8.972-20-20c0-0.167-0.002-0.334-0.006-0.5c0.004-0.166,0.006-0.333,0.006-0.5c0-11.028,8.972-20,20-20h255.331
                                                    c35.503,0,68.084-21.966,83.006-55.962c4.439-10.114-0.161-21.912-10.275-26.352c-10.114-4.439-21.912,0.161-26.352,10.275
                                                    C430.299,300.125,411.661,313,392.331,313h-240.39L134.09,149h333.308l-9.786,46.916c-2.255,10.813,4.682,21.407,15.495,23.662
                                                    c1.377,0.288,2.75,0.426,4.104,0.426c9.272,0,17.59-6.484,19.558-15.92l14.809-71C512.808,127.19,511.317,121.056,507.519,116.384
                                                    z M399,434c10.477,0,19,8.523,19,19s-8.523,19-19,19s-19-8.523-19-19S388.523,434,399,434z M201,434c10.477,0,19,8.524,19,19
                                                    c0,10.477-8.523,19-19,19s-19-8.523-19-19S190.523,434,201,434z"></path>
                                            </g>
                                        </svg>
                                        Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="cv-testimonial spacer-top-less">
            <div className="container">
                <div className="cv-heading">
                    <h1>Customer review</h1>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                </div>
                <div className="row">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="cv-testi-box">
                                    <div className="cv-testi-data">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore.</p>
                                    </div>
                                    <div className="cv-testi-footer">
                                        <div className="cv-testi-img">
                                            <img src="src/assets/images/user.jpg" alt="image" className="img-fluid" />
                                        </div>
                                        <div className="cv-testi-name">
                                            <h1>John Michel</h1>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="cv-testi-box">
                                    <div className="cv-testi-data">
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                            voluptate velit esse cillum dolore.</p>
                                    </div>
                                    <div className="cv-testi-footer">
                                        <div className="cv-testi-img">
                                            <img src="src/assets/images/user2.jpg" alt="image" className="img-fluid" />
                                        </div>
                                        <div className="cv-testi-name">
                                            <h1>John Michel</h1>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cv-arrow">
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}

export default Home