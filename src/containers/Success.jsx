import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from '../context/AppContext';

// Components
import Map from '../components/Map';

// Hooks
import useGoogleAddress from '../hooks/useGoogleAddress';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer, coordinates } = state;

  // console.log(buyer);
  //console.log(state);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{buyer[0].name} Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu dirección</span>
        <div className="Success-map">
          <Map data={coordinates} />
        </div>
      </div>
    </div>
  );
}

export default Success;
