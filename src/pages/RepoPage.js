import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SideBarRightContainer from "../containers/SideBarRightContainer";
import RepoContainer from "../containers/RepoContainer";
import TopNavContainer from "../containers/TopNavContainer";


class RepoPage extends Component {

  state = {
    repos: [],
    currentRepo: {},
    currentUser: {}
  }

  // Logging in redirect to repo page, once repo page reloaded, get currentUser from localstorage token 
  componentDidMount () {

    fetch("http://localhost:3000/repos")
    .then(resp => resp.json())
    .then(repos => this.setState({ repos: repos }))

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

  handleTopNavRepoClick = (repoid) => {
    let clickedRepo = this.state.repos.find(repo => repo.id === repoid)
    this.setState({ currentRepo: clickedRepo });
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
    .then(user => this.setState({ currentUser: user }))
  }

  goToNextRepo = () => {
    const idx = this.state.repos.indexOf(this.state.currentRepo) + 1
    this.setState({
      currentRepo: this.state.repos[idx]
    })
  }

  render() { 
    console.log("props in repopage", this.props);
    return ( 
      <>
        <TopNavContainer
        repos={this.state.repos} //for curriculum dropdown
        handleTopNavRepoClick={this.handleTopNavRepoClick}  // handle dropdown click
        currentUser={this.state.currentUser}  //for persist currentUser
        />

        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={13}>
              <RepoContainer currentRepo={this.state.currentRepo} />
            </Grid.Column>

            <Grid.Column width={3}>
              <SideBarRightContainer
                increaseKarmaCount={this.increaseKarmaCount}
                currentRepo={this.state.currentRepo} 
                currentUser={this.state.currentUser} 
                history={this.props.history}
                goToNextRepo={this.goToNextRepo}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
      );
  }
}
 
export default RepoPage;

