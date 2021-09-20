import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Utils
import { handleSumTotal } from '../utils/index';
// hooks
import AppContext from '../context/AppContext';

// Styles
import '../styles/components/Checkout.css';

function Checkout() {
  // Conectamos app al estado/context y sacamos el estado y la función que queremos
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  // nótese la sintaxis
  const handleRemove = (product, prodIndex) => () => {
    removeFromCart(product, prodIndex);
  };

  // No recibe nada puesto que ya dentro de ella estamos haciendo
  // referencia al cart del estado
  // const handleSumTotal = () => {
  //   // Función que suma todos los valores de un array
  //   // en un total
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.price;
  //   const sum = cart.reduce(reducer, 0);
  //   return sum;
  // };

  const displayCartItems = () =>
    cart.map((item, index) => (
      <div id={index} className="Checkout-item">
        <div className="Checkout-element">
          <h4>{item.title}</h4>
          <span>${item.price}</span>
        </div>
        <button type="button" onClick={handleRemove(item, index)}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    ));

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        {cart.length > 0
          ? displayCartItems()
          : 'No tienes ningún item en el carrito de compras.'}
      </div>

      {/* Sidebar */}
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
