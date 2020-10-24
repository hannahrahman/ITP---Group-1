import React, { Component } from "react";
import OnlineDrivingNICRenewalNavbar from "../../NavBars/OnlineDrivingNICRenewalNavbar.component";
import {Container, Row, Col, Button} from 'react-bootstrap'

import OnlineDriving from "./Online_Driving"
import OnlineNIC from "./Online_NIC"

export default class OnlineDrivingNICRenewal extends Component {

  
  render() {
    return (


<div>
          <div>
            {/* <OnlineDrivingNICRenewalNavbar /> */}

<Container>

<Button variant="primary" href="/viewlostLicenseDetails" > View Lost License</Button>{' '}
<Button variant="primary" href="/viewlostNicDetails" > View Lost NIC</Button>{' '}

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
