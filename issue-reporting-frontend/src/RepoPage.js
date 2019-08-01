import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import TopNavContainer from "./containers/TopNavContainer";
import SideBarRightContainer from "./containers/SideBarRightContainer";
import RepoContainer from "./containers/RepoContainer";

class RepoPage extends Component {
  
  state = {
    currentRepo: {},
    readme: {}
  }

  handleRepoClick = (repoid) => {

    let clickedRepo = this.props.repos.find(repo => repo.github_repo_id === repoid)
    
    this.setState({ currentRepo: clickedRepo });

    fetch(`https://api.github.com/repos/learn-co-students/${clickedRepo.name}/readme`)
    .then(resp => resp.json())
    .then(readme => this.setState({ readme: readme }))
  }

  // handleSubmitSurvey = () => {

  //   //create a new survey 
  //     newSurvey = {

  //     }

    // update survey database, fetch post
  

    // increase Karma count
    // currentKarmaCount = 
    // updatedKarmaCount = 
    // this.setState({ karmaCount: updatedKarmaCount });
  // }

  render() { 

    return ( 
      <>
        <TopNavContainer 
          repos={this.props.repos} //for curriculum dropdown
          handleRepoClick={this.handleRepoClick}  // handle dropdown click
          currentUser={this.props.currentUser}  //for login
        />

        <Grid celled='internally'>

          <Grid.Row>

            <Grid.Column width={13}>
              <RepoContainer 
                currentRepo={this.state.currentRepo} 
                readme={this.state.readme} 
              />
            </Grid.Column>

            <Grid.Column width={3}>
              <SideBarRightContainer
                increaseKarmaCount={this.props.increaseKarmaCount}
                currentRepo={this.state.currentRepo} 
                currentUser={this.props.currentUser} 
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </>
     );
  }
}
 
export default RepoPage;