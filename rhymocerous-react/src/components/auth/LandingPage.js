import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


class LandingPage extends Component {
    render() {
        return (
            <div>
                <Jumbotron id="jumbotron">
                    <h1 className="display-3">Welcome To Rhymocerous!</h1>
                    <p className="lead">The app for poets to create fresh and inspired poems!</p>
                    <hr className="my-2" />
                    <p></p>
                    <p className="lead">
                        <Button variant="secondary" onClick={() => { this.props.history.push("/login") }}>Login</Button>
                        <Button variant="secondary" onClick={() => { this.props.history.push("/register") }}>Register</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default LandingPage;