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
        <Route
          exact
          path={"/instagram"}
          render={() =>
            (window.location.href = "https://www.instagram.com/shawbar.kyiv/")
          }
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
