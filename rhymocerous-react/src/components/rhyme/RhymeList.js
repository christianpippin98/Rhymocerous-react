import React, { Component } from "react"
import RhymeCard from "./RhymeCard"
import './RhymeList.css'


class RhymeList extends Component {


    state = {
        rhymes: []
    }

    render() {
        return (
            <>
                <div className="rhymeList">
                    {
                        this.props.rhymes.map(rhyme =>
                            <RhymeCard
                                key={`${rhyme.word}${rhyme.score}`}
                                rhyme={rhyme}
                                delete={this.delete}
                                {...this.props}
                            />)
                    }
                </div>
            </>
        )
    }
}

export default RhymeList