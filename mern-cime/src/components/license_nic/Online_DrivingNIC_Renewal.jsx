import React, { Component } from "react";
import OnlineDrivingNICRenewalNavbar from "../../NavBars/OnlineDrivingNICRenewalNavbar.component";
import { Button } from 'semantic-ui-react';

// import DatePicker from "react-datepicker";

import OnlineDriving from "./Online_Driving"
import OnlineNIC from "./Online_NIC"

export default class OnlineDrivingNICRenewal extends Component {

  
  render() {
    return (

        <div>
          <div>
            <OnlineDrivingNICRenewalNavbar />
            <Button className="primary" href="/ViewLOst">View Complaint</Button>
          </div>

          <div class="container" style={{ marginTop: 36 + "rem" }}>

            <table>
              <tr>
                <td>
                  <OnlineDriving/>
                </td>

                <td>
                  <OnlineNIC/>  
                </td>

              </tr>

            </table>

            </div>
        </div>

    );
  }
}
