import React from 'react'
import Header from "../components/Header.js"
import Banner from "../components/Banner.js"
import Grid from "../components/Grid.js"
import MapSection from "../components/MapSection.js"
import Footer from "../components/Footer.js"
import Copyrights from "../components/Copyright.js"
import Helmet from 'react-helmet'

import  "../styles/index.scss";

export default function IndexPage() {
  return(
    
      <div className = "container">
        <Helmet title="Honest Farmer" defer={false} />
      <Header/>
      <Banner  />
      <Grid />
     
      <MapSection />
      <Footer />
      <Copyrights />
      
      </div>
      
  
  )
}