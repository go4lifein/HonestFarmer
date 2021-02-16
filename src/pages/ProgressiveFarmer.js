import React from 'react'
import progressiveStyles from "../styles/pages/progressive.module.scss"
import Layout from "../components/Layout.js"
import {Link} from "gatsby"
import polyhouse from "../images/polyhouse.png"
import farm from "../images/farm.png"
import trap from "../images/trap.png"


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
                <h1>Our Farmers use modern technologies for farming to produce more than other farmers in that region.</h1>
                
            </div>
            <div className = {progressiveStyles.grid1}>
                <div className = {progressiveStyles.left}>
                    <h1>
                        Polyhouse
                    </h1>
                    <p>Polyhouse is very beneficial for the farmers specially those who prefer organic farming as the plants are grown under controlled temperature thus there is less chances of crop loss or damage.

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
                       Our farmers use drip irrigation to minimize nutrients and fertilizers loss and increase water applicaton efficiency.
                        Since field leveling is not neccessay, fields with irregular shapes can be easily accomodated. 
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
                       Pheromone Traps are used to monitor target pests in agriculture or in residential areas. By constantly monitoring for insects, it may be possible to detect an infestation before it occurs. Early detection of pest insects using pheromone traps can also lessen damage to agriculture and other plants.
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