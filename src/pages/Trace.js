import React from 'react'
import {Link} from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import traceStyles from "../styles/pages/trace.module.scss"


export default function Trace()
{
    return(
        <div className = {traceStyles.trace}>
            <Header />
            <div className = {traceStyles.innercontent}>
                <p><Link to = "/">Home</Link> / Traceable Food</p>
                <h1>Traceable Food</h1>
                <p>A guide for Traceability Program.</p>
            </div>
            <Footer />
            <Copyright />
        </div>
    )
}