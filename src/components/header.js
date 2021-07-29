import React , {useState} from 'react'
import headerStyles from "../styles/component/header.module.scss";
import {Link} from 'gatsby'
import Logo from "../assets/svgs/logo.svg"

export default function Header()

{
  const [nav , showNav] = useState(false)
  
  return(
    <div className = {headerStyles.header}
    data-sal="fade"
    data-sal-delay="50"
    data-sal-easing="ease"
    data-sal-duration = "300"
    >
      <div className = {headerStyles.nav}>
      <Link to ="/" className= {headerStyles.logo}>
        <Logo />
      </Link>
      <div className = {headerStyles.menu}>
      <div className ={`${headerStyles.navlink} ${nav ? headerStyles.show : " "}` }>
      
        <Link to = "/Farmers">Our Farmers</Link>
        <Link to = "/Blog"> Blog</Link>
        <Link to = "#footer">Contact</Link>
      </div>
      
      <div 
        className = {headerStyles.menuIcon} 
        onClick ={() => {
          showNav(!nav);
        }}
      >
    
        <span></span>
        <span></span>
        <span></span>
        </div>
      </div>
      </div>
    </div>
  )
}

