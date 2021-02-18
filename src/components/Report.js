import React, { useEffect, useRef, useState } from 'react'
import MapGL, {Marker} from 'react-map-gl';
import {Link} from 'gatsby'
import "../styles/report.scss";
import headerStyles from "../styles/component/header.module.scss";
import Logo from "../assets/svgs/logo.svg"

import markerImage from '../images/marker.webp';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function Report({report}) {

  const {Farmer, Product, harvestTime} = report;

  const [ viewport, setViewport ] = useState({
    latitude: Number(Farmer.latitude) - 0.040000,
    longitude: Number(Farmer.longitude) + 0.062000,
    zoom: 11,
  });

  return (
    <div className="relative" id="report">
      <div className="absolute" style={{top: 10, left: 10, zIndex: 12, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 4}}>
        <Link to ="/" >
          <Logo style={{width: 100}} />
        </Link>
      </div>
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        doubleClickZoom={false}
        scrollZoom={false}
        mapStyle="mapbox://styles/umakantv/ckl6mevfz50qk19qotvcyz4hd"
      >

        
        <Marker
          // latitude={Number(Farmer.latitude) + 0.160123}
          // longitude={Number(Farmer.longitude) }
          latitude={Number(Farmer.latitude) - 0.070123}
          longitude={Number(Farmer.longitude) + 0}
          offsetLeft={-20} offsetTop={-10}
        >
          {/* <img src={markerImage} width={40} /> */}
          <div>
            <div className="farmer">
              <div className="avatar">
                <img src={Product.image} alt="product" />
              </div>
              <div className="content">
                <div className="title">{Product.name}</div>
                <div style={{fontFamily: 'monospace'}}>
                  Harvested on <br />
                  {new Date(harvestTime).toDateString()} <br />
                  at {new Date(harvestTime).toTimeString().substr(0, 8)}
                </div>
              </div>
            </div>
          </div>
        </Marker>

        <Marker
          latitude={Number(Farmer.latitude)}
          longitude={Number(Farmer.longitude)}
          offsetLeft={-20} offsetTop={-10}
        >
          <img src={markerImage} width={40} />
          <div className="radar-marker">

          </div>
          <div className="" >
            <div className="farmer">
            
              <div className="avatar">
                <img src={Farmer.image} alt="farmer" />
              </div>
              <div className="content">
                <div className="title">{Farmer.name}</div>
                <div>
                  {Farmer.subregion}, {Farmer.region}
                </div>
              </div>
            </div>
          </div>
        </Marker>
      </MapGL>
    </div>
  );
};

export default Report;