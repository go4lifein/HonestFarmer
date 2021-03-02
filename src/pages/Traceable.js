import React from 'react'
import {Link} from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import traceStyles from "../styles/pages/trace.module.scss"
import qr from "../images/qrcode.png"
import qr2 from "../images/qr2.png"
import qr3 from "../images/qr3.png"
import  Helmet  from 'react-helmet'

export default function Trace()
{
    return(
        <div className = {traceStyles.trace}>
            <Helmet title="Trace Your Food" defer={false} />
            <Header />
            <div className = {traceStyles.innercontent}>
        
                <p><Link to = "/">Home</Link> / Traceable Food</p>
                <h1>Traceable Food</h1>
                <p>A guide for Traceability Program.</p>
            </div>
            <div className  = {traceStyles.section1}>
                <h1>Scan the QR code on the packaging to find out exactly when & where your food came from. Here’s how it works:
.</h1>
                <div className = {traceStyles.grid1}>
                        <h1>Step 1: Look out for the QR code on any Pack.</h1>
                        <img src = {qr} alt = "qrcode" />
                    </div>  
                    <div className = {traceStyles.grid1}>
                        <h1>Step 2: Use your phone’s camera or a scanner app to scan. </h1>
                        <img src = {qr2} alt = "qrcode2" />
                    </div> 
                    <div className = {traceStyles.grid1}>
                        <h1>Visit the URL that pops up to trace your food’s origin. See exactly when it was harvested, and which farm it came from. </h1>
                        <img src = {qr3} className = {traceStyles.qr3} alt = "qrcode2" />
                    </div>   
            </div>
        
        
            <Footer />
            <Copyright />
        </div>
    )
}