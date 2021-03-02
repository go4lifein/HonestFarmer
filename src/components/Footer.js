import { Link } from 'gatsby'
import React from 'react'
import Logo from "../assets/svgs/hfwhite.svg"
import FooterStyles from "../styles/component/footer.module.scss"
import {AiOutlineFacebook} from "@react-icons/all-files/ai/AiOutlineFacebook"
import {AiOutlineInstagram} from "@react-icons/all-files/ai/AiOutlineInstagram"

import {AiOutlineMediumWorkmark} from "@react-icons/all-files/ai/AiOutlineMediumWorkmark"
export default function Footer()
{
    return(
        <div className = {FooterStyles.footer} id = "footer">
            <div className = {FooterStyles.section1}>
                <Logo />
            </div> 
            <div className = {FooterStyles.section2}>
            <h1>Navigation</h1>    
            <Link to = "/Farmers">Our Farmers</Link>
            <Link to = "/Blog">Blog</Link>
            <Link to ="/Traceable">Traceability</Link>
            </div>        
           
            <div className = {FooterStyles.section4}>
                <h1>Products</h1>
                <Link className = {FooterStyles.disabled}>Fruits</Link>
                <Link className = {FooterStyles.disabled}>Vegetables</Link>
                <Link className = {FooterStyles.disabled}>Groceries</Link>
                <Link className = {FooterStyles.disabled}>Ayurveda</Link>
            </div>
            <div className = {FooterStyles.social}>
                <h1>Follow Us</h1>
                <div className = {FooterStyles.links}>
                <a href = "https://www.facebook.com/HonestFarmerCo/">
                    <AiOutlineFacebook />
                </a>
                <a href  = "https://www.instagram.com/honestfarmerco/">
                    <AiOutlineInstagram />
                </a>
                <a href = "https://medium.com/@HonestFarmerCo">
                    <AiOutlineMediumWorkmark className = {FooterStyles.medium} />
                </a>
                
                </div>
            </div> 
        </div>
    )
}   