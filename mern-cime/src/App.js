import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import Sidenav from "./components/navbar-vertical.component.jsx"
import CrimeDivision from "./components/Crime_Division.component.jsx"
import MiscellaneousComplaints from "./components/Miscellaneous_Complaints.component.jsx"
import { Helmet } from "react-helmet";
import Police from './police.png'

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Police Station</title>
        <meta name="description" content="Police Station" />
        <meta name="viewport" content="width=device-width, maximum-scale=1" />
        <link rel="shortcut icon" href={Police} />
      </Helmet>
      <div id="content">
        <Router>
          <div>

            <Sidenav />
            <Route exact path="/Crime Division" exact component={CrimeDivision} />
            <Route exact path="/Miscellaneous Complaints" exact component={MiscellaneousComplaints} />

          </div>

        </Router>
      </div>
    </div>
  );
}

export default App;
