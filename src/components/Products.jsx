import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';
import AppContext from '../context/AppContext';

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  // Nótese esta sintaxis!, pues como queremos pasar esta función por parámetro <Product>,
  // debe ser una función que retorne otra función!!!!!!!!!1
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
