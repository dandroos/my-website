import React, { useState, useEffect } from "react";
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
import LoadScreen from "./components/LoadScreen";

function App() {
  const [appState, setAppState] = useState({
    collapseMenu: true,
    isReady: false
    // isReady: false
  });

  const toggleMenu = (e, newLink = false) => {
    if (e.target.getAttribute("linkclick")) {
      if (newLink) {
        setAppState({
          ...appState,
          isReady: false
        });
      } else {
        console.log("reached");
        setAppState({
          ...appState,
          collapseMenu: !appState.collapseMenu
        });
      }
    } else {
      setAppState({
        ...appState,
        collapseMenu: !appState.collapseMenu
      });
    }
  };

  const contentLoaded = () => {
    if (!appState.isReady) {
      setAppState({
        ...appState,
        isReady: true
      });
      window.scrollTo(0, 0)
    }
  };

  useEffect(() => {
    if (appState.isReady) {
      setAppState({
        ...appState,
        collapseMenu: true
      });
    }
  }, [appState.isReady]);

  return (
    <Router onUpdate={()=> console.log('herrrre!!!!')}>
      <div className="App">
        <LoadScreen isReady={appState.isReady} />
        <Transition
          native
          items={!appState.collapseMenu}
          from={{ position: "absolute", marginTop: -1000 }}
          enter={{ marginTop: 0 }}
          leave={{ marginTop: -1000 }}
          config={{ duration: 200, velocity: 1000 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div
                style={{
                  ...props,
                  position: "fixed",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  zIndex: 10000
                }}
              >
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
              <Contact isReady={contentLoaded} />
            </Route>
            <Route path="/about">
              <About isReady={contentLoaded} />
            </Route>
            <Route path="/portfolio">
              <Portfolio isReady={contentLoaded} />
            </Route>
            <Route path="/services">
              <Services isReady={contentLoaded} />
            </Route>
            <Route path="/">
              <Hero isReady={contentLoaded} />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
