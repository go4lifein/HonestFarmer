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
            <div className = {zeroStyles.section1}>
                <h1>Our Zero Waste Policy</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <Footer />
            <Copyright />

        </div>
    )
}
