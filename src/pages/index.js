import React from 'react'
import  "../styles/index.scss";
import Header from "../components/Header.js"
import Banner from "../components/Banner.js"
import Grid from "../components/Grid.js"

export default function IndexPage()
{
  return(
    
      <div className = "container">
      <Header />
      <Banner />
      <Grid />

      </div>
      
  
  )
}