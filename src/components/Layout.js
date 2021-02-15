import React from 'react'
import Copyright from './Copyright'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
export default function Layout({children})
{
    return(
        <div className = "layout">
            <Header />
            {children}
            <Footer />
            <Copyright />

        </div>

    )
}