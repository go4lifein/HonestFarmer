import React , {useState} from 'react'
import headerStyles from "../styles/component/header.module.scss";
import {Link} from 'gatsby'
import Logo from "../assets/svgs/logo.svg"
import {MdAndroid} from "@react-icons/all-files/md/MdAndroid"
import {AiFillApple} from '@react-icons/all-files/ai/AiFillApple'
export default function Header()

{
  const [nav , showNav] = useState(false)
  return(
    <div className = {headerStyles.header}>
      <div className = {headerStyles.nav}>
      <Link to ="/" className= {headerStyles.logo}>
        <Logo />
      </Link>
      <div className = {headerStyles.navlink} nav = {nav}>
        <Link to = "/">Our Journey </Link>
        <Link to = "/">Products</Link>
        <Link to = "/">Stories</Link>
        <Link to = "/">Contact</Link>
      </div>
      <div className = {headerStyles.buttons}>
        <Link to = "/">
          <MdAndroid className = {headerStyles.android} />
        </Link>
        <Link to = "/">
          <AiFillApple className = {headerStyles.apple} />
        </Link>
      </div>
      <div className = {headerStyles.menuIcon} onClick ={() => showNav(!nav)}>
    
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </div>
  )
}

