import React from 'react'
import progressiveStyles from "../styles/pages/progressive.module.scss"
import Layout from "../components/Layout.js"
import {Link} from "gatsby"
import polyhouse from "../images/polyhouse.png"
import farm from "../images/farm.png"
import trap from "../images/trap.png"
import Helmet from 'react-helmet'


export default function ProgressiveFarmer()
{
    return(
        <div className = {progressiveStyles.progressive}>
            <Helmet title="Progressive Farmer" defer={false} />
            <Layout>
            <div className = {progressiveStyles.innercontent}>
            <p><Link to = "/">Home</Link> / Progressive Farmers</p>
            <h1>Progressive Farmers</h1>
            <p>Know more about Progressive Farming.</p>
        </div>
            <div className = {progressiveStyles.section1}>
                <h1>We work with farmers who use bio-pesticides & natural fertilisers in a safe way, without compromising on crop yield. Read on to learn about the clever techniques they use.</h1>
                
            </div>
            <div className = {progressiveStyles.grid1}>
                <div className = {progressiveStyles.left}>
                    <h1>
                        Polyhouse
                    </h1>
                        <p>
                        It’s a closed, controlled environment that minimises chances of crop loss or damage. Because the temperature inside can be controlled, it’s useful for growing produce in all seasons. 

                        </p>
                </div>
                <div className = {progressiveStyles.right}>
                    <img src = {polyhouse} alt = "polyhouse" />
                </div>


            </div>
            <div className = {progressiveStyles.grid2}>
            
                <div className = {progressiveStyles.left}>
                    <h1>
                        Drip Irrigation
                    </h1>
                   <p>
                   This micro-irrigation system minimises the amount of water, nutrients and fertilizers used by depositing them directly above the root. It conserves natural resources, and works even for fields with irregular shapes. 
                   </p>
                </div>
                <div className = {progressiveStyles.right}>
                    <img src = {farm} alt = "drip-irrigation" />
                </div>
               


            </div>
            <div className = {progressiveStyles.grid3}>
           
                <div className = {progressiveStyles.left}>
                    <h1>
                        Pheromone Trap
                    </h1>
                   <p>
                   These traps are spaced out across farms. Powdered pheromone inside these traps lures insects, and a strong glue on the outside traps them as soon as they land. When used along with a neem spray, these eliminate the need for synthetic pesticides.


                    </p>
                </div>
                <div className = {progressiveStyles.right}>
                    <img src = {trap} alt = "pheromone-trap" />
                </div>
               


            </div>
            </Layout>
           
        </div>
    )
}