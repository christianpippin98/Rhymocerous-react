import React, { Component } from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import RhymeSearch from "./rhyme/RhymeSearch"
import { Col, Row } from "react-bootstrap"
import './RhymocerousBuilder.css'

class RhymocerousBuilder extends Component {



    render() {
        return (
            <div className="rhymocerousBuilder">
                <React.Fragment>
                    <Route render={props => (
                        <NavBar {...props} />
                    )} />
                    <Row>
                        <Col><RhymeSearch /></Col>
                        <Col sticky="top"><ApplicationViews /></Col>
                    </Row>

                </React.Fragment>
            </div>
        )
    }
}

export default RhymocerousBuilder