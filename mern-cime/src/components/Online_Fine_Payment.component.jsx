import React, { Component } from "react";
import OnlineFinePaymentNavbar from "../NavBars/OnlineFinePaymentNavbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OnlineFineDetailList from "./onlinefineDetailsList-component";
import EditComplain from "./edit-complain.component";
import onlinefineDetailsForm from "./onlinefineDetailsForm.component";
import CreateUser from "./create-user.component";
import CreateAppeal from "./create-appeal.component";

export default class OnlineFinePayment extends Component {
  render() {
    return (
      <Router>
        <meta
          name="viewpoint"
          content="width=device-width , initial-scale=1"
        ></meta>
        <div style={{ marginTop: -100.90 + "rem" }}>
          <div style={{ marginLeft: 20 + "rem" }}>
            <OnlineFinePaymentNavbar />
          </div>
          <Route exact path="/OnlineFineDetailList" exact component={OnlineFineDetailList} />
          <Route path="/edit/:id" exact component={EditComplain} />
          <Route path="/onlinefineDetailsForm" exact component={onlinefineDetailsForm} />
          <Route path="/user" exact component={CreateUser} />
          <Route path="/Appeal" exact component={CreateAppeal} />
        </div>
      </Router>
    );
  }
}
