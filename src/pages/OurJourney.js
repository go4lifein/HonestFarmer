import React from 'react'
import {Link } from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import journeyStyles from "../styles/pages/journey.module.scss"
export default function SecondPage()
{
  return(
    <div className = {journeyStyles.journey}>
      <Header / >
        <div className = {journeyStyles.innercontent}>
          <p><Link to = "/" className = {journeyStyles.link}>Home</Link> / Our Journey</p>
          <h1>Our Journey</h1>
          <p>How we deliver fresh greens from farm to table.</p>
         
        </div>

        <div className = {journeyStyles.section1}>
         <h1>Fastest Agricultural Supply Chain in the country.</h1> 
         <p>We deilver the freshest produce in india.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu dui fringilla, rutrum erat nec, placerat magna. Etiam non mollis leo, id interdum dui. </p>
        </div>
        <Footer />
        <Copyright />      

    </div>

  );
}