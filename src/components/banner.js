import React from 'react'
import bannerStyles from "../styles/component/banner.module.scss"
import {Link} from 'gatsby'
import {CgArrowLongRight} from "@react-icons/all-files/cg/CgArrowLongRight"


export default function Banner(){
    return(
        <div className = {bannerStyles.hero}>
            <div className = {bannerStyles.heroLeft}>
                <h1>Fresh Greens<br></br> Now Traceable.</h1>
            

                <p>We deliver the freshest produce in India.<br></br> From farm to table.</p>
          
                  
               
            </div>
            <div className = {bannerStyles.heroRight}>
                
                   </div>     

        </div>
    )
}