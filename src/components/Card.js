import React from 'react'
import cardStyles from "../styles/component/card.module.scss"

export default function Card({name , image, region , subregion })
{
    return(
        <div className = {cardStyles.card}>
            <h1>{name}</h1>
                <img 
                    src = {image} 
                    width={150} 
                    height={150} 
                    alt = "avatar" 
                    style={{borderRadius: '50%'}}
                />
            
            <p>
                Location: <span>{subregion}, {region}</span>
            </p>
        
        </div>
    )
}