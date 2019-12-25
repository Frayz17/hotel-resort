import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from 'modules/Menu';
import { Home, NotFound, Rooms, SingleRoom } from 'routes';
import Footer from 'modules/Footer';

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/rooms'>
          <Rooms />
        </Route>
        <Route exact path='/rooms/:slug'>
          <SingleRoom />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
