import "./App.css";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import React, { Component } from "react";

import LandingPage from "./containers/landingPage";
import Topbar from "./components/inApp/Topbar";
import Dashboard from "./containers/inApp/dashboard";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={() => <LandingPage history={history} />}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/Topbar" component={Topbar} />
      </BrowserRouter>
    </div>
  );
}

export default App;
