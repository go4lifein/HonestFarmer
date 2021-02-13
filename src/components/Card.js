import React from 'react'
import {Link} from 'gatsby'
import cardStyles from "../styles/component/card.module.scss"

export default function Card({name , image, about , region , subregion , latitude , longitude })
{
    return(
        <div className = {cardStyles.card}>
            <h1>{name}</h1>
            <img src = {image} width={100} alt = "avatar" />
            <p>{about}</p>
            <p> Location : <span>{region} , {subregion}</span></p>
        
        </div>
    )
}