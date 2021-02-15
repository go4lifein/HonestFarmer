import React from 'react'
import progressiveStyles from "../styles/pages/progressive.module.scss"
import Layout from "../components/Layout.js"
import {Link} from "gatsby"



export default function ProgressiveFarmer()
{
    return(
        <div className = {progressiveStyles.progressive}>
            <Layout>
            <div className = {progressiveStyles.innercontent}>
            <p><Link to = "/">Home</Link> / Progressive Farmers</p>
            <h1>Progressive Farmers</h1>
            <p>Know more about Progressive Farming.</p>
</div>
            <div className = {progressiveStyles.section1}>
                
            </div>
            </Layout>
           
        </div>
    )
}