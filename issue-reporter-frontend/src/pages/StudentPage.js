import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SideBarRightContainer from "../containers/SideBarRightContainer";
import RepoContainer from "../containers/RepoContainer";
import TopNavContainer from "../containers/TopNavContainer";


class StudentPage extends Component {

  render() { 
    return ( 
      <>
        <TopNavContainer
        myRepos={this.props.myRepos} //for curriculum dropdown
        handleTopNavRepoClick={this.props.handleTopNavRepoClick}  // handle dropdown click
        currentUser={this.props.currentUser}
        currentRepo={this.props.currentRepo}
        />

        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={13}>
              <RepoContainer 
              currentRepo={this.props.currentRepo} 
              // currentmyRepoSelected={this.state.currentmyRepoSelected}
              />
            </Grid.Column>

            <Grid.Column width={3}>
              <SideBarRightContainer
                increaseKarmaCount = {this.props.increaseKarmaCount}
                currentRepo={this.props.currentRepo} 
                currentUser={this.props.currentUser} 
                myRepos={this.props.myRepos}
                history={this.props.history}
                goToNextRepo={this.props.goToNextRepo}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
      );
  }
}
 
export default StudentPage;

