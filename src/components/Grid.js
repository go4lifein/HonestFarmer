import React  from 'react'
import {Link} from 'gatsby'
import gridStyles from "../styles/component/grid.module.scss"

export default function Grid()
{
    return(
        <div className = {gridStyles.grid} id = "grid" >
            
            <div className = {gridStyles.section1}
                 
            >
               
                <Link to ="/ProgressiveFarming"
                     data-sal="fade"
                     data-sal-delay="10"
                     data-sal-easing="ease"
                     data-sal-duration = "250"
                className = {gridStyles.row1}>
                <h1>Progressive Farming</h1>
                </Link>
               
                <Link to = "/Traceable"
                 data-sal="fade"
                 data-sal-delay="40"
                 data-sal-easing="ease"
                 data-sal-duration = "300"
                className = {gridStyles.row2}>
                <h1>Traceable Food</h1>
                </Link>
            </div>
            <div className = {gridStyles.section2}>
                <Link to ="/ZeroWaste"
                 data-sal="fade"
                 data-sal-delay="10"
                 data-sal-easing="ease"
                 data-sal-duration = "250"
                className = {gridStyles.row3}>
                <h1>Zero Waste</h1>
              
              
                </Link>
                <Link to = "/Farmers" 
                 data-sal="fade"
                 data-sal-delay="40"
                 data-sal-easing="ease"
                 data-sal-duration = "300"
                className = {gridStyles.row4}>
                <h1>Meet Our Farmers</h1>
                </Link>
            </div>
            
        </div>
    )
}
