import { Link } from 'gatsby'
import React from 'react'
import Logo from "../assets/svgs/hfwhite.svg"
import FooterStyles from "../styles/component/footer.module.scss"
import {AiOutlineFacebook} from "@react-icons/all-files/ai/AiOutlineFacebook"
import {AiOutlineInstagram} from "@react-icons/all-files/ai/AiOutlineInstagram"
import {AiOutlineLinkedin} from "@react-icons/all-files/ai/AiOutlineLinkedin"
import {AiFillTwitterSquare} from "@react-icons/all-files/ai/AiFillTwitterSquare"
export default function Footer()
{
    return(
        <div className = {FooterStyles.footer} id = "footer">
            <div className = {FooterStyles.section1}>
                <Logo />
            </div> 
            <div className = {FooterStyles.section2}>
            <h1>Navigation</h1>    
            <Link to = "/OurJourney">Our Journey</Link>
            <Link to = "/Farmers">Our Farmers</Link>
            <Link to = "/Stories">Stories</Link>
            <Link to ="/Traceability">Traceability</Link>
            </div>        
           
            <div className = {FooterStyles.section4}>
                <h1>Products</h1>
                <Link>Fruits</Link>
                <Link>Vegetables</Link>
                <Link>Groceries</Link>
                <Link>Ayurveda</Link>
            </div>
            {/* <div className = {FooterStyles.social}>
                <h1>Follow Us</h1>
                <div className = {FooterStyles.links}>
                <Link to = "/">
                    <AiOutlineFacebook />
                </Link>
                <Link to  = "/">
                    <AiOutlineInstagram />
                </Link>
                <Link to = "/"><AiOutlineLinkedin /></Link>
                <Link to  = "/">
                    <AiFillTwitterSquare />
                </Link>
                </div>
            </div> */}
        </div>
    )
}   