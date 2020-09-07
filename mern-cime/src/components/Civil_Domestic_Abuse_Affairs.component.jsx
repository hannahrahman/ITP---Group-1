import React, { Component } from 'react'
import CivilDomesticAbuseAffairsNavbar from "../NavBars/CivilDomesticAbuseAffairsNavbar.jsx"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ComplainsList from "./complains-list.component"
import EditComplain from "./edit-complain.component"
import CreateComplain from "./create-complain.component"
import CreateUser from "./create-user.component"
import CreateAppeal from "./create-appeal.component"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-reboot.min.css"

export default class CivilDomesticAbuseAffairs extends Component {
    render() {
        return (
            <Router>
                <meta name="viewpoint" content="width=device-width , initial-scale=1"></meta>
                <div style={{ marginTop: -55.5 + 'rem' }}>
                    <div style={{ marginLeft: 18 + 'rem' }} >
                        <CivilDomesticAbuseAffairsNavbar />
                    </div>
                    <Route exact path="/ComplainsList" exact component={ComplainsList} />
                    <Route path="/edit/:id" exact component={EditComplain} />
                    <Route path="/Complain" exact component={CreateComplain} />
                    <Route path="/user" exact component={CreateUser} />
                    <Route path="/Appeal" exact component={CreateAppeal} />
                </div>

            </Router>

        )
    }

}