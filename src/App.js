import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Sol from "./Sol.js"

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <video autoPlay loop className="video-back">
                <source src="https://bluenav.fr/static/media/video.861e0c72.mp4" type="video/mp4" />
              </video>
              <div className="container">
                <div className="item-col">
                  <div className="logo">
                    <img className="img-logo"
                        src="https://bluenav.fr/static/media/logo-white.9ff59369.svg"
                    />
                  </div>
                  <div className='Text-home'>Propreté, Silence, Convivialité, solutions innovantes de motorisations
                    <span style={{ color: "#00b3fe" }}>
                      hybrides et électriques
                    </span>
                  </div>
                </div>
                <div className="item-col">
                  <Nav className="flex-column">
                    <div className='side-col'>L'hybridation douce</div>
                    <LinkContainer to="/Solutions">
                      <Nav.Link className='side-col'>Solutions éléctriques</Nav.Link>
                    </LinkContainer>
                    <div className='side-col'>Actualités</div>
                    <div className='side-col'>Qui sommes-nous?</div>
                  </Nav>
                </div>
              </div>
            </Route>
            <Route path="/Solutions">
              <Sol />
            </Route>
          </Switch>
        </Router>
      </div>

    );
  }


}

export default App;