import React from 'react'
import "../styles/component/copyright.scss"
import { AiOutlineCopyright } from '@react-icons/all-files/ai/AiOutlineCopyright'


export default function Copyright()
{
    
    return(
        <div className = "copy">
            <div className = "section">
                <p> <AiOutlineCopyright className="icon" />Honest Farmer</p>
            </div>

        </div>
    )
}