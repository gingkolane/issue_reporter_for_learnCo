import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './stylesheets/App.css'
import Pages from './pages'

class App extends Component {

  state = {
    currentUser: {}
  }

  componentDidMount() {

    if (localStorage.token) {

      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
        })
        .then(res => res.json())
        .then(data => {
          this.setState({currentUser: data})
        })
    } 
  }

  increaseKarmaCount= () => {
    let currentKarmaCount = parseInt(this.state.currentUser.karma);
    let updatedKarmaCount = currentKarmaCount + 1;
    
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, {
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
  }

  render () {
    return (
      <Switch>

        <Route exact path="/" component={ Pages.LoginPage } />
        <Route exact path="/signup" component={ Pages.SignupPage } />

        <Route path="/student" render={ (routerProps) => <Pages.StudentPage {...routerProps} 
          currentUser = { this.state.currentUser } 
          increaseKarmaCount = {this.increaseKarmaCount}
          />} 
        />

        <Route path="/analytics" render = {(routerProps) => <Pages.AnalyticsPage {...routerProps} 
          currentUser = { this.state.currentUser } 
          increaseKarmaCount = {this.increaseKarmaCount}
          />}
        />
        
        <Route path="/teacher" render = {(routerProps) => <Pages.TeacherPage {...routerProps} 
          currentUser={this.state.currentUser} 
          increaseKarmaCount = {this.increaseKarmaCount}
          /> }
        />

        <Route component={ Pages.FourOFourPage } />

      </Switch>

    )
  }
}

export default App;