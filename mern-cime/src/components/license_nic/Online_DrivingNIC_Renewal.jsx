import React, { Component } from "react";
import OnlineDrivingNICRenewalNavbar from "../../NavBars/OnlineDrivingNICRenewalNavbar.component";
import { Button } from 'semantic-ui-react';
import {Container, Row, Col} from 'react-bootstrap'

import OnlineDriving from "./Online_Driving"
import OnlineNIC from "./Online_NIC"

export default class OnlineDrivingNICRenewal extends Component {

  
  render() {
    return (


<div>
          <div>
            <OnlineDrivingNICRenewalNavbar />

              <Button className="primary" href="/viewlostLicenseDetails">View Complaint</Button>

<Container>
  	<Row noGutters>

    		<Col>
                  	<OnlineDriving/>
    		</Col>


    		<Col>
                  <OnlineNIC/>  
               </Col>
	</Row>
        
</Container>
          </div>



</div>

    );
  }
}
