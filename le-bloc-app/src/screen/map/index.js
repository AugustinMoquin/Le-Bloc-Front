import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import mapData from "./../../data/traces-du-reseau-ferre-idf.json";
import gare from "./../../data/emplacement-des-gares-idf-data-generalisee.geojson";

const Map = () => {
  const [data, setData] = React.useState(mapData);
  // const [dare, setData] = React.useState(mapData);
  return (
    <MapContainer
      center={[48.86403006871555, 2.337624000899988]}
      zoom={13}
      style={{ height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={data.features} />
    </MapContainer>
  );
};

export default Map;
