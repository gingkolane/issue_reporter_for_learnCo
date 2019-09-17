import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './stylesheets/App.css'

import LoginPage from './LoginPage'
import RepoPage from './RepoPage'
import AnalyticsPage from './AnalyticsPage'
import TableauPage from './TableauPage'

import TopNavContainer from "./containers/TopNavContainer";

class App extends Component {

  state = {
    repos: [],
    users: [],
    surveys: [],
    currentUser: {},
    currentRepo: {}
  }

  componentDidMount() {
    fetch("http://localhost:3000/repos")
    .then(resp => resp.json())
    .then(repos => this.setState({ repos: repos }))

    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(users => this.setState({ users: users }))

    fetch("http://localhost:3000/users/792")
    .then(resp => resp.json())
    .then(user => this.setState({ currentUser: user }))

    fetch("http://localhost:3000/surveys")
    .then(resp => resp.json())
    .then(surveys => this.setState({ surveys: surveys }))
  }

  handleTopNavRepoClick = (repoid) => {
    let clickedRepo = this.state.repos.find(repo => repo.github_repo_id === repoid)
    this.setState({ currentRepo: clickedRepo });
  }

  increaseKarmaCount= () => {
    let currentKarmaCount = parseInt(this.state.currentUser.karma);
    let updatedKarmaCount = currentKarmaCount + 1;

    fetch("http://localhost:3000/users/792", {
    // fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'Accepted':'application/json'
      },
      body: JSON.stringify({
        karma: updatedKarmaCount
      })
    })
    .then(resp => resp.json())
    .then(user => this.setState({ currentUser: user }))
  }

  goToNextRepo = () => {
    const idx = this.state.repos.indexOf(this.state.currentRepo) + 1
    this.setState({
      currentRepo: this.state.repos[idx]
    })
  }

  render () {
    return (
      <>
      <TopNavContainer
        repos={this.state.repos} //for curriculum dropdown
        handleTopNavRepoClick={this.handleTopNavRepoClick}  // handle dropdown click
        currentUser={this.state.currentUser}  //for login
      />

      <Switch>
        <Route exact path="/" component={LoginPage} />
        
        <Route path="/repo" render={ (routerProps) => <RepoPage {...routerProps} goToNextRepo={this.goToNextRepo} repos={this.state.repos} currentUser={this.state.currentUser} currentRepo={this.state.currentRepo} increaseKarmaCount={this.increaseKarmaCount}/> } />
        
        <Route path="/analytics" render = {(routerProps) => <AnalyticsPage {...routerProps} repos={this.state.repos} users={this.state.users} surveys={this.state.surveys} currentUser={this.state.currentUser} currentRepo={this.state.currentRepo} /> }/>
        
        <Route path="/tableau" render = {(routerProps) => <TableauPage {...routerProps} repos={this.state.repos} users={this.state.users} surveys={this.state.surveys} currentUser={this.state.currentUser} currentRepo={this.state.currentRepo} /> }/>
     
      </Switch>
      
      </>
    )
  }
}

export default App;