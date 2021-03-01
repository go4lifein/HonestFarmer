import React from 'react'
import Header from "../components/Header.js"
import {Link} from 'gatsby'
import Footer from "../components/Footer.js"
import Card from "../components/Card.js"
import Copyright from "../components/Copyright.js"
import productStyles from "../styles/pages/products.module.scss"
import Helmet from 'react-helmet'
import farmersData from '../DummyData/farmer.js'


export default function Farmers() {
  return(
    <div className = {productStyles.products}>
      <Helmet title="Our Farmers" defer={false} />
      <Header />
      <div className = {productStyles.innercontent}>
        <p>
          <Link to = "/">Home</Link> / Our Farmers
        </p>
        <h1 className = {productStyles.head}>Our Farmers</h1>
        <p>Get to know more about our farmers.</p>
      </div>
      <h1 className = {productStyles.pre}>
        We’ve partnered with award-winning farmers who pair cutting-edge techniques with ancient wisdom. 

      </h1>

      <div className = {productStyles.section1}>
        {farmersData.map((item , i) => {
          const {name , image , about , region , subregion , latitude , longitude} = item;
          return(
            <Card
              key = {i.toString()}
              name = {name}
              image = {image}
              about = {about}
              region = {region}
              subregion = {subregion}
              latitude = {latitude}
              longitude = {longitude}
            />

          );
       })}
      </div>
     
      
      <Footer />
      <Copyright /> 

    </div>

  );
}

/*
  <div className = {productStyles.section2}>
      {farmers2Data.map((item, i) => {
        const {name , image , about , region , subregion , latitude , longitude} = item ;

        return(
          <Cards
            key = {i.toString()}
            name = {name}
            image = {image}
            about = {about}
            region = {region}
            subregion = {subregion}
            latitude = {latitude}
            longitude = {longitude}
          />
        );

      })}
      </div>

*/