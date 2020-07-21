import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Default from './pages/Default';
import Buys from './pages/Buys';
import Nav from './components/Nav';
import { useAppContext } from './contexts/AppContext';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Default} />
      <ProtectRoutes />
    </Switch>
  );
}

function ProtectRoutes() {
  const { state } = useAppContext();
  if (state.user) {
    return (
      <>
        <Nav />
        <Route path="/buys" exact component={Buys} />
      </>
    );
  }
  return <Redirect to="/" />;
}
