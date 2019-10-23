import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import './stylesheets/App.css'
import Pages from './pages'

class App extends Component {

  state = {
    currentUser: {},
    // myRepos is currentUser forked repos 
    myRepos: [], 
    currentRepo: {}
  }

  componentDidMount() {

    if (localStorage.token) {
      // fetch logged-in user and its myRepos data, the profile route has set to render both user and its myRepos in json )
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            currentUser: data.user, 
            myRepos: data.repos, 
            // set user's first repo as the currentRepo
            currentRepo: data.repos[0]
          })
        })
    } 
  }

  handleTopNavRepoClick = (repoid) => {
    let clickedRepo = this.state.myRepos.find(repo => repo.id === repoid)
    this.setState({ 
      currentRepo: clickedRepo
      // currentmyRepoSelected: true
     });
  }

  goToNextRepo = () => {
    const idx = this.state.myRepos.indexOf(this.state.currentRepo) + 1
    this.setState({
      currentRepo: this.state.myRepos[idx]
    })
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
    .catch(error => alert(error))
  }

  render () {
    return (
      <Switch>

        <Route exact path="/" component={ Pages.LoginPage } />
        <Route exact path="/signup" component={ Pages.SignupPage } />
        <Route path="/student" render={ (routerProps) => <Pages.StudentPage {...routerProps} 
          currentUser = { this.state.currentUser } 
          myRepos={ this.state.myRepos } 
          currentRepo = { this.state.currentRepo }
          handleTopNavRepoClick={this.handleTopNavRepoClick}  // handle dropdown click
          increaseKarmaCount = {this.increaseKarmaCount}
          goToNextRepo={this.goToNextRepo}
          />} 
        />
        
        <Route path="/teacher" render = {(routerProps) => <Pages.TeacherPage {...routerProps} 
          currentUser={this.state.currentUser} 
          myRepos =  { this.state.myRepos } 
          /> }
        />

        <Route component={ Pages.FourOFourPage } />

      </Switch>
    )
  }
}

export default withRouter(App);