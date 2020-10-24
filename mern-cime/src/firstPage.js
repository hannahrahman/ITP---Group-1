import React, { Component } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./app.scss"
import Header from './components/Home/header'
import { CSSTransition } from "react-transition-group"
import { gsap } from "gsap"
import Home from './components/Home/title'
import App from './App'

export default class FirstPage extends Component {

  render() {
    return (
        <div>

          <Router>
            <Header />
            <div>
              {/*<Route key='name' path={path} exact />*/}
              <Route exact path="/home" exact component={Home} />
              <Route exact path="/App" exact component={App} />
            </div>
          </Router>
        </div>

    )
  }
}
