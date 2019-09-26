import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './stylesheets/App.css'
import Pages from './pages'

class App extends Component {


  componentDidMount() {
    // fetch("http://localhost:3000/repos")
    // .then(resp => resp.json())
    // .then(repos => this.setState({ repos: repos }))

    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(users => this.setState({ users: users }))

    fetch("http://localhost:3000/surveys")
    .then(resp => resp.json())
    .then(surveys => this.setState({ surveys: surveys }))
  }

  render () {
    return (
      <Switch>

        <Route exact path="/" component={ Pages.LoginPage } />
        <Route exact path="/signup" component={ Pages.SignupPage } />

        <Route path="/repo" render={ (routerProps) => <Pages.RepoPage {...routerProps} 
          goToNextRepo={this.goToNextRepo} 
          // repos={this.state.repos} 
          /> } 
        />


        <Route path="/analytics" render = {(routerProps) => <Pages.AnalyticsPage {...routerProps} 
        repos={this.state.repos} 
        users={this.state.users} 
        surveys={this.state.surveys} 
        /> }/>
        
        <Route path="/tableau" render = {(routerProps) => <Pages.TableauPage {...routerProps} 
        repos={this.state.repos} 
        users={this.state.users} 
        surveys={this.state.surveys} 
        currentUser={this.state.currentUser} 
        currentRepo={this.state.currentRepo} /> }/>


        <Route component={ Pages.FourOFourPage } />

      </Switch>

    )
  }
}

export default App;