import React from 'react'
import {Link} from 'gatsby'
import gridStyles from "../styles/component/grid.module.scss"

export default function Grid()
{
    return(
        <div className = {gridStyles.grid}>
            <div className = {gridStyles.section0}>
                <h1>Order Today , delivery by Tommorow.</h1>
            </div>
            <div className = {gridStyles.section1}>
               
                <Link to ="/Farmers" className = {gridStyles.row1}>
                <h1>Progressive Farmers</h1>
                </Link>
               
                <Link to = "/Trace"className = {gridStyles.row2}>
                <h1>Traceable Food</h1>
                </Link>
            </div>
            <div className = {gridStyles.section2}>
                <Link to ="/ZeroWaste" className = {gridStyles.row3}>
                <h1>Zero Waste</h1>
              
              
                </Link>
                <Link to = "/Farmers" className = {gridStyles.row4}>
                <h1>Meet Our Farmers</h1>
                </Link>
            </div>
            
        </div>
    )
}