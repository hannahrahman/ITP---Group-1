import React, { Component } from 'react'



export default class OnlineFinePayment extends Component {
    render() {
        return (
            <Router>
                <meta name="viewpoint" content="width=device-width , initial-scale=1"></meta>
                <div style={{ marginTop: -55.5 + 'rem' }}>
                    <div style={{ marginLeft: 18 + 'rem' }} >
                        <OnlineFinePaymentNavbar />
                    </div>
                    <Route exact path="/ComplainsList" exact component={ComplainsList} />
                    <Route path="/edit/:id" exact component={EditComplain} />
                    <Route path="/Complain" exact component={CreateComplain} />
                    <Route path="/user" exact component={CreateUser} />
                    <Route path="/Appeal" exact component={CreateAppeal} />
                </div>

            </Router>

        )
    }

}