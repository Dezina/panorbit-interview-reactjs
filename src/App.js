import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from './components/Profile';
import Home from './components/Home';
import Display from './components/Display';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import ToDo from './components/ToDo';


function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/display" component={Display} />
          <Route path="/posts" component={Posts} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/todo" component={ToDo} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;