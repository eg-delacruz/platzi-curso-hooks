import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useHistory } from 'react-router-dom';

import '../styles/components/Payment.css';

// Utils
import { handleSumTotal } from '../utils/index';

// Hooks
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';

function Payment() {
  const { state, addNewOrder, addBuyerCoordinates } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const location = useGoogleAddress(
    buyer[0].address,
    buyer[0].city,
    buyer[0].province,
    buyer[0].country
  );

  const paypalOptions = {
    clientId:
      'AXtbwj_0NsVhD3DUA426SlLNFosXACD2lFFQuDda6iqzLfUGb7l2UY12aJxYaCAXLNL3KW2ELIkZ3pBi',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'pill',
    color: 'blue',
  };

  // Cuando recibimos success, recibimos estatus.
  // Si es completed, crearemos una nueva orden con la info
  // del comprador, los productos comprados y los datos
  // de pago.
  // Esta información la guardaremos en el estado y luego
  // redireccionaremos
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      console.log(state);

      addBuyerCoordinates(location);
      history.push('/checkout/success');
    }
  };
  //console.log(state);
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.length > 0
          ? cart.map((item) => (
              <div key={item.title} className="Payment-item">
                <div className="Payment-element">
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
                </div>
              </div>
            ))
          : 'No tienes nada en tu carrito de compras'}

        <br />
        <br />
        <br />
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal(cart)}
            // onPaymentStart usando react-paypal-button-v2 podría ser
            // createOrder
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div className="Information-sidebar">
        {/* <h3>Total de tu pedido:</h3> */}

        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>Precio Total: </h3>
            <h3>${handleSumTotal(cart)}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
