import React from 'react'
import bannerStyles from "../styles/component/banner.module.scss"
import {Link} from 'gatsby'
import {CgArrowLongRight} from "@react-icons/all-files/cg/CgArrowLongRight"


export default function Banner(){
    return(
        <div className = {bannerStyles.hero}>
            <div className = {bannerStyles.heroLeft}>
                <h1>Food, Traceable now.</h1>
            

                <p>We deliver the freshest produce in India.<br></br> From farm to table.</p>
          
                    <div className = {bannerStyles.buttons}>
                    <Link to ="/" className = {bannerStyles.btn}>
                    Learn More <CgArrowLongRight className = {bannerStyles.arrow} />
                </Link>
                <Link to ="http://deliver.go4life.in/#/trace" className = {bannerStyles.btn2}>
                    Trace Your Milk <CgArrowLongRight className = {bannerStyles.arrow} />
                </Link>
                    </div>
               
            </div>
            <div className = {bannerStyles.heroRight}>
                
                   </div>     

        </div>
    )
}