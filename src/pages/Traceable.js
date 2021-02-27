import React from 'react'
import {Link} from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import traceStyles from "../styles/pages/trace.module.scss"
import qr from "../images/qrcode.png"
import qr2 from "../images/qr2.png"
import qr3 from "../images/qr3.png"

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
            <div className  = {traceStyles.section1}>
                <h1>Our Traceable Food is what makes us special.</h1>
                <div className = {traceStyles.grid1}>
                        <h1>Step 1: Look out for the QR code on any Pack.</h1>
                        <img src = {qr} alt = "qrcode" />
                    </div>  
                    <div className = {traceStyles.grid1}>
                        <h1>Step 2: Scan the QR code with any scanner. </h1>
                        <img src = {qr2} alt = "qrcode2" />
                    </div> 
                    <div className = {traceStyles.grid1}>
                        <h1>Step 3: Visit the URL for Real time traceability. </h1>
                        <img src = {qr3} className = {traceStyles.qr3} alt = "qrcode2" />
                    </div>   
            </div>
        
        
            <Footer />
            <Copyright />
        </div>
    )
}