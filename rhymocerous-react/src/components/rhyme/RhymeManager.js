import React, { Component } from "react"
import RhymeList from "./RhymeList"
import APIManager from "../../modules/APIManager"


class RhymeManager extends Component {

    state = {
        rhymes: []
    }





    render() {
        return (
            <>
                <main className="explorer">
                    <RhymeList rhymes={this.props.rhymes} key="key" {...this.props} />
                </main>
            </>
        )
    }
}

export default RhymeManager