import React from 'react'
import bannerStyles from "../styles/component/banner.module.scss"
import {Link} from 'gatsby'
import {CgArrowLongRight} from "@react-icons/all-files/cg/CgArrowLongRight"


export default function Banner(){
    return(
        <div className = {bannerStyles.hero}
        >
            <div className = {bannerStyles.heroLeft}
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration = "300">
                <h1>Fresh Produce,<br></br> Now Traceable</h1>
            

                <p>Trace farm-fresh produce back to its exact place & time of harvest.
                
                   <span id ="break"> Scan a QR code to get started.</span>
</p>
                  
               
            </div>
            <div className = {bannerStyles.heroRight}>
            
             </div>     

        </div>
    )
}