import React from 'react'
import {Link} from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import zeroStyles from "../styles/pages/zero.module.scss"
import  Helmet  from 'react-helmet'

export default function ZeroWaste()
{
    return(
        <div className = {zeroStyles.zero}>
            <Helmet title="Zero Waste" defer={false} />
            <Header />
            <div className = {zeroStyles.innercontent}>
                <p><Link to = "/">Home</Link> / Zero Waste</p>
                <h1>Zero Waste</h1>
                <p>Ensuring nothing gets wasted.</p>
            </div>
            <div className = {zeroStyles.section1}>
                <h1>Sustainable practices, zero food wastage.</h1>
                <p>
                To reduce food wastage, we harvest fruits & vegetables after carefully analysing customer demand. Our farm-fresh produce is available on Swiggy Instamart.
            <br></br>
            <br></br>
            We take utmost care not to harvest more than we can sell. Any food items left unsold are taken back from stores, and donated to the needy. Items with extremely short shelf life are taken back to our farms, and composted to make fertiliser.

                </p>
            </div>
            <Footer />
            <Copyright />

        </div>
    )
}
