import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map({ data }) {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  console.log(data);
  return (
    <LoadScript googleMapsApiKey="AIzaSyCSTy8sXHUgOySoQI5FKNe9Nder-6Aiyqk">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        {/* Pin */}
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
