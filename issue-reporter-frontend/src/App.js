import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import './stylesheets/App.css'
import Pages from './pages'

class App extends Component {

  state = {
    currentUser: {},
    repos: []
  }

  componentDidMount() {

    if (localStorage.token) {

      fetch('https://issue-reporter-api.herokuapp.com/profile', {
        headers: {
          Authorization: localStorage.token
        }
        })
        .then(res => res.json())
        .then(data => {
          this.setState({currentUser: data})
          // console.log(data.role)
          // this.props.history.push(`/${data.role}`)
        })

      // take subset repos data
      fetch("https://issue-reporter-api.herokuapp.com/repos")
      .then(resp => resp.json())
      .then(repos => this.setState({ repos: repos }))

    } 
  }

  increaseKarmaCount= () => {
    let currentKarmaCount = parseInt(this.state.currentUser.karma);
    let updatedKarmaCount = currentKarmaCount + 1;
    
    fetch(`https://issue-reporter-api.herokuapp.com/users/${this.state.currentUser.id}`, {
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
    .then(user => this.setState({ currentUser: user}))
    .catch(error => alert(error))
  }

  render () {
    return (
      <Switch>

        <Route exact path="/" component={ Pages.LoginPage } />
        <Route exact path="/signup" component={ Pages.SignupPage } />
        <Route path="/student" render={ (routerProps) => <Pages.StudentPage {...routerProps} 
          currentUser = { this.state.currentUser } 
          repos =  { this.state.repos } 
          increaseKarmaCount = {this.increaseKarmaCount}
          />} 
        />

        {/* <Route path="/analytics" render = {(routerProps) => <Pages.AnalyticsPage {...routerProps} 
          currentUser = { this.state.currentUser } 
          increaseKarmaCount = {this.increaseKarmaCount}
          />}
        /> */}
        
        <Route path="/teacher" render = {(routerProps) => <Pages.TeacherPage {...routerProps} 
          currentUser={this.state.currentUser} 
          repos =  { this.state.repos } 
          increaseKarmaCount = {this.increaseKarmaCount}
          /> }
        />

        <Route component={ Pages.FourOFourPage } />

      </Switch>

    )
  }
}

export default withRouter(App);