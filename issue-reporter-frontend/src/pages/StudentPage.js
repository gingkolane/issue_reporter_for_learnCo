import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SideBarRightContainer from "../containers/SideBarRightContainer";
import RepoContainer from "../containers/RepoContainer";
import TopNavContainer from "../containers/TopNavContainer";


class StudentPage extends Component {

  state = {
    // repos: [],
    currentRepo: {}
  }

  // Logging in redirect to repo page, once repo page reloaded, get currentUser from localstorage token 
  componentDidMount () {

    // // take subset repos data, 10 repos for topNav
    // fetch("https://issue-reporter-api.herokuapp.com/subset")
    // .then(resp => resp.json())
    // .then(repos => this.setState({ repos: repos }))

    // get the default repo as the entry page repo
    fetch("https://issue-reporter-api.herokuapp.com/repos/173502")
    .then(resp => resp.json())
    .then(repo => this.setState({ currentRepo: repo }))
  }

  handleTopNavRepoClick = (repoid) => {
    let clickedRepo = this.props.repos.find(repo => repo.id === repoid)
    this.setState({ currentRepo: clickedRepo });
  }

  goToNextRepo = () => {
    const idx = this.props.repos.indexOf(this.state.currentRepo) + 1
    this.setState({
      currentRepo: this.props.repos[idx]
    })
  }

  render() { 
    return ( 
      <>
        <TopNavContainer
        repos={this.props.repos} //for curriculum dropdown
        handleTopNavRepoClick={this.handleTopNavRepoClick}  // handle dropdown click
        currentUser={this.props.currentUser}
        />

        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={13}>
              <RepoContainer currentRepo={this.state.currentRepo} />
            </Grid.Column>

            <Grid.Column width={3}>
              <SideBarRightContainer
                increaseKarmaCount = {this.props.increaseKarmaCount}
                currentRepo={this.state.currentRepo} 
                currentUser={this.props.currentUser} 
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
 
export default StudentPage;

