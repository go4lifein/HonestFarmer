import React from 'react'
import MapStyles from "../styles/component/mapsection.module.scss"
import mapsimage from "../images/mapsimage.png"
// import {Link} from 'gatsby'

export default function MapSection ()
{
  return(

    <div className = {MapStyles.style}>
     
      <img src = {mapsimage} className = {MapStyles.mapsimage} alt = "mapiamge0" />
    </div>
  )
}
