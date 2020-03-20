import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import PoemManager from "./poem/PoemManager"
import Register from "./auth/Register"
import Login from "./auth/Login"
import PoemDetailView from "./poem/PoemDetailView"
import NewPoemForm from "./poem/NewPoemForm"

class ApplicationViews extends Component {
  


  
  render() {
    console.log(this.state, "AppView")
    return (
      <React.Fragment>
        <Route exact path="/poems" render={props => {
          return <PoemManager {...props} completedSearch={this.props.completedSearch} filteredPoems={this.props.filteredPoems}/>
        }}
        />
        <Route exact path="/poems/:poemId(\d+)" render={props => {
          return <PoemDetailView {...props} />
        }}
        />
        <Route path="/poems/new" render={(props) => {
          return <NewPoemForm {...props} />
        }} />
        <Route
          path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login {...props} />
          }}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)