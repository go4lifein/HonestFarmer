import React from 'react'
import {Link} from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import zeroStyles from "../styles/pages/zero.module.scss"

export default function ZeroWaste()
{
    return(
        <div className = {zeroStyles.zero}>
            <Header />
            <div className = {zeroStyles.innercontent}>
                <p><Link to = "/">Home</Link> / Zero Waste</p>
                <h1>Zero Waste</h1>
                <p>Ensuring nothing gets wasted.</p>
            </div>
            <Footer />
            <Copyright />

        </div>
    )
}
