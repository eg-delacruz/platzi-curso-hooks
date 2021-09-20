import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Hooks
import AppContext from '../context/AppContext';
// Recordemos que useInitialState es una función
// que retorna el estado y dos funciones más
import useInitialState from '../hooks/useInitialState';

// Components
import {
  Home,
  Payment,
  CheckOut,
  Information,
  Success,
  NotFound,
} from '../containers';
import Layout from '../components/Layout';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
