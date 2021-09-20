import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import AppContext from '../context/AppContext';

// Styles
import '../styles/components/Header.css';

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {/* Validamos si solo mostrar la canasta o la canasta con lo que hayamos
        añadido a la compra */}
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </header>
  );
}

export default Header;
