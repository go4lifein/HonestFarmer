import React from 'react'
import {Link } from 'gatsby'
import stoStyles from "../styles/component/stories.module.scss"


export default function Stories()
{
    return(
        <div className = {stoStyles.stories}>
            <div className = {stoStyles.wrapper}>
                <h1>Want to know<br></br> more about us ?</h1>
                <Link to = "/" className = {stoStyles.wrapper__btn}>
                    Join us!
                </Link>
            </div>
        </div>
    )
}
