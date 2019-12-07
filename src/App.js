import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Container } from "reactstrap";
import { Transition, animated } from "react-spring/renderprops";

import Nav from "./components/Nav";
import NavButton from "./components/NavButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/hero";
import Services from "./pages/services";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {
  const [appState, setAppState] = useState({
    collapseMenu: false
    // collapseMenu: true
  });

  const toggleMenu = () => {
    setAppState({
      ...appState,
      collapseMenu: !appState.collapseMenu
    });
  };

  return (
    <Router>
      <div className="App">
        <Transition native
          items={!appState.collapseMenu}
          from={{ position: "absolute", marginTop: -1000 }}
          enter={{ marginTop: 0 }}
          leave={{ marginTop: -1000 }}
          config={{ duration: 200, velocity: 1000}}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={{...props, position: 'fixed', top: 0, right: 0, bottom: 0, left:0, zIndex: 1000 }}>
                <Nav isCollapsed={appState.collapseMenu} toggle={toggleMenu} />
              </animated.div>
            ))
          }
        </Transition>
        <NavButton click={toggleMenu} isOpen={appState.collapseMenu} />
        <Header />
        <Container>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/">
              <Hero />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
