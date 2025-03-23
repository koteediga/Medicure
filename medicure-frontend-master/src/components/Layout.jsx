import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Copyright from './footer/Copyright'
import TopBar from './header/TopBar'

function Layout({ children }) {
    return (
        <>

            <div className="cv-main-wrapper">
                <TopBar />
                <Header />

                { children }

                <Footer />
                <Copyright />
            </div>

        </>
    )
}

export default Layout