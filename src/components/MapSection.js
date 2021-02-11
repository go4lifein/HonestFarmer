import React, { useEffect, useRef, useState } from 'react'
import MapStyles from "../styles/component/mapsection.module.scss"
import mapboxgl, { Marker } from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"
import "../styles/map.css"
//mapboxgl.accessToken = 'pk.eyJ1IjoiYW5raXR2YXQiLCJhIjoiY2treG9ndHFmMmlvOTJvcW5pNmdjemx5MCJ9.txYSSRyJBcUIclwQuFwDhA';


const styles = {
  width: "94%",
  margin: "3%",
  height: "calc(100vh - 80px)",
  
};

const MapSection = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5raXR2YXQiLCJhIjoiY2treG9ndHFmMmlvOTJvcW5pNmdjemx5MCJ9.txYSSRyJBcUIclwQuFwDhA';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [77.005438, 28.387802],
        zoom: 11
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
        map.scrollZoom.disable();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={mapContainer} className = {MapStyles.style} />;
};

export default MapSection;
