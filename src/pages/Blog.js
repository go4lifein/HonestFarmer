import React from 'react'
import {Link} from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import storiesStyles from "../styles/pages/story.module.scss";
import { Helmet } from 'react-helmet'
export default function StoriesPage()
{
    return(
        <div className = {storiesStyles.stories}>
            <Helmet title="Our Blog" defer={false} />
            
            <Header />
        <div className = {storiesStyles.innercontent}>
            <p><Link to = "/">Home</Link> / Stories</p>
            <h1>Stories</h1>
            <a href = "https://medium.com/@HonestFarmerCo" className = {storiesStyles.mediumlink}>Read more about us.</a>
        </div>

        <div className = {storiesStyles.section1}>
            <h1>The Abandoned Indian Farmer</h1>
            <p>In Delhi, two governments are so busy advertising their efforts towards farmer welfare, they forget to do any actual work.
                
                </p><br></br>
                <h2>
                    <br></br>
                    How It All Started
                </h2>
                <p className = {storiesStyles.text}>
                    <br></br>We uncovered a shocking truth recently when we tried to help one of our farmers build a cold storage.
                    <br></br>
                    <br></br>
                    Balraj Rana wanted to help a hundred odd farmers from his area store exotic veggies — which happen to be extremely perishable — for a few hours before having them picked up by our team. He hoped to build a cold storage for this purpose, which he planned to share with his fellow farmers for free.
                    
              </p>  

                <a href = "https://medium.com/@HonestFarmerCo/the-abandoned-indian-farmer-79fd73ece099" className = {storiesStyles.med_link}>Read More.</a>

            
        </div>
        
        <div className = {storiesStyles.section1}>
            <h1>What It Take to Transform a Village.</h1>
            <br></br>
            <p>A tiny man taught us how to transform an entire village. Here’s what it takes: one piece of information and one insight.
              </p>
               <br></br>
                <p className = {storiesStyles.text}>
                We were eager to meet Rameshwar. We had heard he had transformed an agrarian village in the Himalayas. We had heard impressive stories, the kind you rarely get to hear about a person someone knows in real life, and so we were surprised to see a tiny man, no more than 5 feet 3 inches tall, greet us at Ashwini Ghat. We looked at each other and we wondered how he did it.
                </p>
                

                <a href = "https://medium.com/@HonestFarmerCo/what-it-takes-to-transform-a-village-5848b046084c" className = {storiesStyles.med_link}>Read More.</a>

            
        </div>

        
            <Footer />
            <Copyright />
        </div>

    )
}