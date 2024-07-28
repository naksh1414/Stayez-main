// src/Components/MapComponent.js
import { useEffect, useState } from "react";

const MapComponent = ({ properties }) => {
  const [mapInstance, setMapInstance] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!window.MapmyIndia) {
      console.error("MapmyIndia SDK not loaded");
      return;
    }

    const map = new window.MapmyIndia.Map("map", {
      center: [28.6139, 77.209], // Default center (e.g., New Delhi)
      zoom: 12,
      zoomControl: true,
      hybrid: true,
    });

    setMapInstance(map);

    if (properties.length > 0) {
      const firstProperty = properties[0];
      const marker = new window.MapmyIndia.Marker({
        position: [firstProperty.latitude, firstProperty.longitude],
        map: map,
        title: firstProperty.property_name,
      });

      const infoWindow = new window.MapmyIndia.InfoWindow({
        content: `<div><strong>${firstProperty.property_name}</strong><br>${firstProperty.address1}</div>`,
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });

      setMarkers([marker]);
    }
  }, [properties]);

  useEffect(() => {
    if (mapInstance && markers.length > 0) {
      // Remove existing markers
      markers.forEach((marker) => marker.setMap(null));

      // Add new markers
      properties.forEach((property) => {
        const marker = new window.MapmyIndia.Marker({
          position: [property.latitude, property.longitude],
          map: mapInstance,
          title: property.property_name,
        });

        const infoWindow = new window.MapmyIndia.InfoWindow({
          content: `<div><strong>${property.property_name}</strong><br>${property.address1}</div>`,
        });

        marker.addListener("click", () => {
          infoWindow.open(mapInstance, marker);
        });
      });

      setMarkers(markers);
    }
  }, [properties, mapInstance]);

  return <div id="map" style={{ height: "800px", width: "80%" }}></div>;
};

export default MapComponent;
