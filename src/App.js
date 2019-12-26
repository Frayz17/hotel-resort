import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from 'modules/Menu';
import { Home, NotFound, Rooms, SingleRoom } from 'routes';
import Footer from 'modules/Footer';
import Container from 'components/Container';

function App() {
  return (
    <Container>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slug">
          <SingleRoom />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
