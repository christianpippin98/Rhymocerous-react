import React, { Component } from "react"
import { Route } from "react-router-dom"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import RhymeSearch from "./rhyme/RhymeSearch"

class RhymocerousBuilder extends Component {

    state = {
        poems: []
    }

    // passing the function to the nav component
    render() {
        // console.log(this.state, "Ap")
        return (
            <React.Fragment>
                <Route render={props => (
                    <NavBar {...props} />
                )} />


                <RhymeSearch />


                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default RhymocerousBuilder