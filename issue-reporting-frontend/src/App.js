import React, { Component } from 'react'
import RepoPage from './RepoPage'
import AnalyticsPage from './AnalyticsPage'
import LoginPage from './LoginPage'
import { Switch, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  state = {
    repo: ''
  }

  componentDidMount() {

    fetch("https://api.github.com/repos/learn-co-students/React-Stocks-dumbo-web-051319")
    .then(resp => resp.json())
    .then(repo => this.setState({ repo: repo }))

    // .then(repo => this.setState({ repo: repo }))

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
        <Route path="/repo" render={(routerProps) => <RepoPage {...routerProps} repo={this.state.repo} />} />
        <Route path="/analytics" render={(routerProps) => <AnalyticsPage {...routerProps} username={this.state.username} />} />
      </Switch>
    )
  }
}

export default App;
