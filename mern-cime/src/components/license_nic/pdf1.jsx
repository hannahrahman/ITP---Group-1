import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
class MyDocument extends Component {

  constructor(props) {
    super(props);
 
  }

  render() {
    return (

  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>

    <Text>Name:{this.props.name}</Text>
    <Text>Grama Niladhari Division:{this.props.gs}</Text>
        <Text>Date:</Text>
        <Text>NIC:{this.props.nic}</Text>

      </View>

    </Page>
  </Document>

    )
  }

};

export default MyDocument;
