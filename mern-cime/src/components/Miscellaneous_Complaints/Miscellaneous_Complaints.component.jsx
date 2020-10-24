
import React, { Component } from 'react'
import MiscellaneousComplaintsNavbar from "../../NavBars/MiscellaneousNavbar.component"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MiscellaneousComplainList from "./MiscellaneousComplainList.component"
import MiscellaneousComplaintForm from "./MiscellaneousComplaintForm.component"
import EditMiscellaneousComplain from "./edit-miscellaneous-complain.component"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

export default class MiscellaneousComplaints extends Component {
    

    render() {
        return (
            <div>
            <Router>

             <div>   
                <div style={{ marginLeft: 17 + 'rem' }}>
                   
                        <MiscellaneousComplaintsNavbar />
                   
                </div>
            
          
                    <Route path="/MiscellaneousComplainList" exact component={MiscellaneousComplainList} />
                    <Route path="/MiscellaneousComplaintForm" exact component={MiscellaneousComplaintForm} />
                    <Route path="/EditMiscellaneousComplain/:id" exact component={EditMiscellaneousComplain} />
                    <div style={{ marginLeft: 18 + "rem" }}></div>
                </div>  
                
            </Router>
            </div>

        );
    }

}

