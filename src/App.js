import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from 'modules/Menu';
import { Home, NotFound, Rooms, SingleRoom } from 'routes';

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
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
