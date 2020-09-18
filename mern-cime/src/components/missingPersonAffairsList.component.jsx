import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MissingPersonTableRow from "./missingPersonTableRow";

export default class MissingPersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missingPersonAffairs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/missingPersonAffairs/")
      .then((res) => {
        this.setState({
          missingPersonAffairs: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.missingPersonAffairs.map((res, i) => {
      return <MissingPersonTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div class="container" style={{ marginTop: 2 + "rem" }}>
        <div
          class="card text-dark  bg-white  mb-3"
          style={{ marginLeft: 11 + "rem" }}
        >
          <div class="card-header">
            <h3>Complains List</h3>
          </div>
          <div className="card-body">
            <div className="table-wrapper">
              <Table striped border hover>
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Nick Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>{this.DataTable()}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
