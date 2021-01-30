import React from "react";
import "./App.sass";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Contacts from "./pages/Contacts";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <section className="section">
        <Navigation />
      </section>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
