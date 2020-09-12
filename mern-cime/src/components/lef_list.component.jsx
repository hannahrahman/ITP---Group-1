import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Lef = props => {
    <tr>
        <td>{props.lef.refNo}</td>
        <td>{props.lef.victimFullName}</td>
        <td>{props.lef.reason}</td>
        <td>{props.lef.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.lef._id}>edit</Link> | <a href="#" onClick={() => { props.deleteLef(props.lef._id) }}>delete</a>
        </td>
    </tr>
}

export default class LefList extends Component {

    constructor(props) {
        super(props);
        this.deleteLef = this.deleteLef.bind(this);

        this.state = { lefs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/lefs/')
            .then(response => {
                this.setState({ lefs: response.data })
            })
            .catch((error) => {
                console.log(error);
            }
            )
    }
    deleteLef(id) {
        axios.delete('http://localhost:5000/lefs/' + id)
            .then(res => console.log(res.data));
        this.setState({
            lefs: this.state.lefs.filter(el => el._id !== id)
        })
    }

    lefList() {
        return this.state.lefs.map(currentlef => {
            return <Lef lef={currentlef} deleteLef={this.deleteLef} key={currentlef._id} />
        })
    }
    render() {
        return (
            <div>
                <h3>LEFs</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {this.lefList()}
                </table>
            </div>
        )
    }
}
