import React, { Component } from "react"
import RhymeCard from "./RhymeCard"

class RhymeList extends Component {


    state = {
        rhymes: []
    }

    render() {
        return (
            <>
                <article className="rhymeList">
                    {
                        this.props.rhymes.map(rhyme =>
                            <RhymeCard
                                key={rhyme.word}
                                rhyme={rhyme}
                                delete={this.delete}
                                {...this.props}
                            />)
                    }
                </article>
            </>
        )
    }
}

export default RhymeList