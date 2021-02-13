import React from 'react'
import Header from "../components/Header.js"
import {Link} from 'gatsby'
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import productStyles from "../styles/pages/products.module.scss"
export default function Products()
{
  return(
    <div className = {productStyles.products}>
      <Header />
      <div className = {productStyles.innercontent}>
        <p>
          <Link to = "/">Home</Link> / Our Farmers
        </p>
        <h1>Our Farmers</h1>
        <p>Get to know more about our farmers.</p>
      </div>

      <div className = {productStyles.section1}>

      </div>
      <Footer />
      <Copyright /> 

    </div>

  );
}