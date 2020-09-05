import React, { Component } from 'react'
import CrimeNavbar from "./crimenavbar.component"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ComplainsList from "./complains-list.component"
import EditComplain from "./edit-complain.component"
import CreateComplain from "./create-complain.component"
import CreateUser from "./create-user.component"
import CreateAppeal from "./create-appeal.component"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-reboot.min.css"

export default class MiscellaneousComplaints extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <meta name="viewpoint" content="width=device-width , initial-scale=1"></meta>
                <div style={{ marginTop: -54.3 + 'rem' }}>
                    <div style={{ marginLeft: 17 + 'rem' }} >
                        <CrimeNavbar />
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