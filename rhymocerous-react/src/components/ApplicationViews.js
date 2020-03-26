import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import PoemManager from "./poem/PoemManager"
import Register from "./auth/Register"
import Login from "./auth/Login"
import LandingPage from "./auth/LandingPage"
import PoemDetailView from "./poem/PoemDetailView"
import NewPoemForm from "./poem/NewPoemForm"
import EditPoemForm from "./poem/EditPoemForm"

class ApplicationViews extends Component {


  isAuthenticated = () => sessionStorage.getItem("rhymocerous_token") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
          if (this.isAuthenticated()) {
            return <Redirect to="/poems" />
          } else {
            return <LandingPage setUser={this.props.setUser} {...props} />
          }
        }}
        />
        <Route exact path="/poems" render={props => {
          if (this.isAuthenticated()) {
            return <PoemManager {...props} />
          } else {
            return <LandingPage setUser={this.props.setUser} {...props} />
          }
        }}
        />
        <Route exact path="/poems/:poemId(\d+)" render={props => {
          if (this.isAuthenticated()) {
            return <PoemDetailView {...props} />
          } else {
            return <LandingPage setUser={this.props.setUser} {...props} />
          }
        }}
        />
        <Route exact path="/poems/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <NewPoemForm {...props} />
          } else {
            return <LandingPage setUser={this.props.setUser} {...props} />
          }
        }} />
        <Route exact path="/poems/edit/:poemId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <EditPoemForm {...props} />
          } else {
            return <LandingPage setUser={this.props.setUser} {...props} />
          }
        }} />
        <Route exact path="/register" render={props => {
          if (this.isAuthenticated()) {
            return <Redirect to="/poems" />
          } else {
            return <Register setUser={this.props.setUser} {...props} />
          }
        }}
        />
        <Route exact path="/login" render={props => {
          if (this.isAuthenticated()) {
            return <Redirect to="/poems" />
          } else {
            return <Login setUser={this.props.setUser} {...props} />
          }
        }}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)