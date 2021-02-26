import React from 'react'
import cardStyles from "../styles/component/card.module.scss"

export default function Card({name , image, region , subregion })
{
    return(
        <div className = {cardStyles.card}>
            <h1>{name}</h1>
            <img src = {image} width={100} alt = "avatar" />
            
            <p> Location : <span>{region} , {subregion}</span></p>
        
        </div>
    )
}