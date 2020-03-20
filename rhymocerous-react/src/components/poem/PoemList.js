import React, { Component } from "react"
import Poem from "./PoemCard"
import "./PoemList.css"

class PoemList extends Component {

  render() {
    return (
      <>
        {(this.props.completedSearch)
          ?
          <article className="poemList">
            {
              this.props.filteredPoems.map(filteredPoem => 
                <Poem
                  key={filteredPoem.id}
                  poem={filteredPoem}
                  {...this.props}
                />)
              
            }
          
          </article>
          :
          <article className="poemList">
            {
              this.props.poems.map(poem => 
                <Poem
                  key={poem.id}
                  poem={poem}
                  {...this.props}
                />)
              
            }
          </article>

        }
      </>
    )
  }
}

export default PoemList