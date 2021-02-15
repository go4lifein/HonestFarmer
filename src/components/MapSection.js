import React, { useEffect, useRef, useState } from 'react'
import MapGL from 'react-map-gl';

import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/map.css";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const MapSection = () => {

  const [ viewport, setViewport ] = useState({
    latitude: 28.4501751,
    longitude: 77.0738271,
    zoom: 10,
  });

  return (
    <div style={{marginTop: 40}}>
      <MapGL
        {...viewport}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        width="100vw"
        height="500px"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
      </MapGL>
    </div>
  );
};

export default MapSection;
