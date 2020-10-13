import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';
import OnlineDrivingNICRenewalNavbar from "../../NavBars/OnlineDrivingNICRenewalNavbar.component";

import { PDFViewer } from '@react-pdf/renderer';
import {Container} from 'react-bootstrap'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  }
});

// Create Document Component
class NicLostPDF extends Component {

  constructor(props) {
    super(props);

    this.state = {
      refNo: "",
      name: "",
      nic: "",
      address: "",
      phone: "",
      description: "",
      date: "",
      officer_incharge: "",
      grama_niladhari: "",
    };
    
  }
    
    componentDidMount() {
    axios.get('http://localhost:5000/nic/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          refNo: response.data.refNo,
          name: response.data.name,
          nic: response.data.nic,
          address: response.data.address,
          phone: response.data.phone,
          description: response.data.description,
          date: response.data.date,
          officer_incharge: response.data.officer_incharge,
          grama_niladhari: response.data.grama_niladhari_division,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    
    }


  render() {
    return (


      <div>

<OnlineDrivingNICRenewalNavbar />


      <PDFViewer height="400" width="400">

  <Document>

    <Page size="A4" style={styles.page}>

      <View style={styles.section}>



        <Text>Name:{this.state.name}</Text>
        <Text>Grama Niladhari Division:{this.state.grama_niladhari}</Text>
        <Text>Date:</Text>
        <Text>NIC:{this.state.nic}</Text>

      </View>

    </Page>

  </Document>

  </PDFViewer>

  </div>

    )
  }

};

export default NicLostPDF;
