import React from 'react'
import MapStyles from "../styles/component/mapsection.module.scss"
import mapsimage from "../images/mapsimage.png"
import {Link} from 'gatsby'
import stoStyles from "../styles/component/stories.module.scss"

export default function MapSection ()
{
  return(

    <div className = {MapStyles.style}>
       <div className = {MapStyles.wrapper}>
                <h1>Want to know<br></br> more about us ?</h1>
                <Link to = "/" className = {MapStyles.wrapper__btn}>
                    Join us!
                </Link>
                </div>
      <img src = {mapsimage} className = {MapStyles.mapsimage} alt = "mapiamge0" />
    </div>
  )
}
