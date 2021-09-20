import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address, city, province, country) => {
  const [map, setMap] = useState({});

  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}${city}${province}${country}&key=AIzaSyCc30RrOZ24iCUZwLZK1rsRVr_RJtQWsNU`;

  // Aquí hace falta manejo de error
  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export default useGoogleAddress;
