import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './stylesheets/App.css'

import RepoPage from './RepoPage'
import RepoAnalyticsPage from './RepoAnalyticsPage'
import SurveyAnalyticsPage from './SurveyAnalyticsPage'
import LoginPage from './LoginPage'
import SurveyForm from './components/SurveyForm'
import AllReposTable from './components/AllReposTable'

class App extends Component {

  state = {
    repos: [],
    users: [], 
    surveys: [],
    currentUser: {},
    surveyCollection: []
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

  increaseKarmaCount= () => {
    let currentKarmaCount = this.state.currentUser.karma;
    let updatedKarmaCount = currentKarmaCount + 1;

    console.log("this.state.currentUser", this.state.currentUser);
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
    .then(user => this.setState({ curentUser: user }))
  }

  handleTableRepoClick = (repoid) => {
    let surveysForClickedRepo = this.state.surveys.filter(survey => survey.repo_id === repoid)
    this.setState({ surveyCollection: surveysForClickedRepo });
  }

  render () {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        
        <Route path="/repo" render={ (routerProps) => <RepoPage {...routerProps} repos={this.state.repos} currentUser={this.state.currentUser} increaseKarmaCount={this.increaseKarmaCount}/> } />
          <Route path="/repo/survey" render = {(routerProps) => <SurveyForm  {...routerProps} increaseKarmaCount={this.props.increaseKarmaCount} currentUser={this.props.currentUser} currentRepo={this.props.currentRepo}/> }/>
        
        <Route path="/analytics/repos" render={(routerProps) => <RepoAnalyticsPage {...routerProps} repos={this.state.repos} currentUser={this.state.currentUser} handleTableRepoClick={this.handleTableRepoClick}/> }/>
          <Route path="/analytics/repos/table" render = {(routerProps) => <AllReposTable {...routerProps} repos={this.props.repos} surveys={this.props.surveys} handleTableRepoClick={this.props.handleTableRepoClick}/> }/>
        
        <Route path="/analytics/surveys" render = {(routerProps) => <SurveyAnalyticsPage {...routerProps} repos={this.state.repos} users={this.state.users} surveyCollection={this.state.surveyCollection}/> }/>
      
      </Switch>
    )
  }
}

export default App;