import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import News from "./components/News";
import Business from "./components/Business";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Gallery from "./components/Gallery";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">
          <Header hashKey={new Date().getTime()} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home {...props} hashKey={new Date().getTime()} />
              )}
            />
            <Route
              path="/news"
              exact
              render={(props) => (
                <News {...props} hashKey={new Date().getTime()} />
              )}
            />
            <Route
              path="/business"
              exact
              render={(props) => (
                <Business {...props} hashKey={new Date().getTime()} />
              )}
            />
            <Route
              path="/company"
              exact
              render={(props) => (
                <Company {...props} hashKey={new Date().getTime()} />
              )}
            />
            <Route
              path="/career"
              exact
              render={(props) => (
                <Career {...props} hashKey={new Date().getTime()} />
              )}
            />
            <Route
              path="/Gallery"
              exact
              render={(props) => (
                <Gallery {...props} hashKey={new Date().getTime()} />
              )}
            />
            <Route
              path="/contact"
              exact
              render={(props) => (
                <Contact {...props} hashKey={new Date().getTime()} />
              )}
            />
          </Switch>
          <Footer hashKey={new Date().getTime()} />
        </div>
      </Router>
    );
  }
}

export default App;
