import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import RepoPage from './RepoPage'
import AnalyticsPage from './AnalyticsPage'
import SurveySummaryPage from './SurveySummaryPage'
import LoginPage from './LoginPage'


class App extends Component {

  state = {
    repos: [],
    users: [],
    surveys: []
  }

  componentDidMount() {

    fetch("http://localhost:3000/repos")
    .then(resp => resp.json())
    .then(repos => this.setState({ repos: repos }))

    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(users => this.setState({ users: users }))

    fetch("http://localhost:3000/surveys")
    .then(resp => resp.json())
    .then(surveys => this.setState({ surveys: surveys}))

    // if (localStorage.token) {
    //   fetch('http://localhost:3000/profile', {
    //     headers: {
    //       Authorization: localStorage.token
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(profileData => {
    //     this.setState({username: profileData.username})
    //   })
    // }
    // this.redirect('profile')
  }

  render () {

    // console.log('fetch result inside render, before return', this.state.repo)
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/repo" 
          render={ (routerProps) => 
          <RepoPage {...routerProps} 
            repos={this.state.repos} 
            users={this.state.users} 
            surveys = {this.state.surveys} />
          } />

        <Route exact path="/analytics/1" 
          render = {(routerProps) => 
          <SurveySummaryPage 
            {...routerProps} 
            repos={this.state.repos} 
            users={this.state.users} 
            surveys = {this.state.surveys} 
          /> 
          }
        />

        <Route path="/analytics" 
          render={(routerProps) => 
          <AnalyticsPage 
          {...routerProps} 
          repos={this.state.repos} 
          users={this.state.users}
          surveys = {this.state.surveys} 
         />
        } 
        />
      </Switch>
    )
  }
}

export default App;
