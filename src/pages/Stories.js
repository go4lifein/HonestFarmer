import React from 'react'
import {Link} from 'gatsby'
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Copyright from "../components/Copyright.js"
import storiesStyles from "../styles/pages/story.module.scss";
export default function StoriesPage()
{
    return(
        <div className = {storiesStyles.stories}>
            <Header />
        <div className = {storiesStyles.innercontent}>
            <p><Link to = "/">Home</Link> / Stories</p>
            <h1>Stories</h1>
            <p>Our Blog Posts and Testimonials.</p>
        </div>
            <Footer />
            <Copyright />
        </div>

    )
}