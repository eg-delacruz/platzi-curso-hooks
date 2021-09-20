import React from 'react';
import initialState from '../initialState';

// Components
import Products from '../components/Products';

function Home() {
  return <Products products={initialState.products} />;
}

export default Home;
