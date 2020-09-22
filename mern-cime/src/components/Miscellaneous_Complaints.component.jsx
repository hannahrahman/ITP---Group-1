
import React, { Component } from 'react'
import MiscellaneousComplaintsNavbar from "../NavBars/MiscellaneousNavbar.component"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MiscellaneousComplainList from "./MiscellaneousComplainList.component"
import CreateComplain from "./create-complain.component"
import CreateUser from "./create-user.component"
import MiscellaneousComplaintForm from "./MiscellaneousComplaintForm.component"


export default class MiscellaneousComplaints extends Component {
    

    render() {
        return (
            <Router>
                <meta name="viewpoint" content="width=device-width , initial-scale=1"></meta>
                <div style={{ marginTop: -59 + 'rem' }}>
                    <div style={{ marginLeft: 20 + 'rem' }} >
                        <MiscellaneousComplaintsNavbar />
                    </div>

              </div>
          
                    <Route path="/MiscellaneousComplainList" exact component={MiscellaneousComplainList} />
                    <Route path="/MiscellaneousComplaintForm" exact component={MiscellaneousComplaintForm} />
                    <Route path="/Complain" exact component={CreateComplain} />
                    <Route path="/user" exact component={CreateUser} />
                    
                
            </Router>

        )
    }

}

