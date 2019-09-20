import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import SideBarRightContainer from "./containers/SideBarRightContainer";
import RepoContainer from "./containers/RepoContainer";
import TopNavContainer from "./containers/TopNavContainer";

class RepoPage extends Component {

  render() { 

    return ( 
      <>
        <TopNavContainer
        repos={this.state.repos} //for curriculum dropdown
        handleTopNavRepoClick={this.handleTopNavRepoClick}  // handle dropdown click
        currentUser={this.state.currentUser}  //for login
        />

        <Grid celled='internally'>
          <Grid.Row>
            <Grid.Column width={13}>
              <RepoContainer currentRepo={this.props.currentRepo} />
            </Grid.Column>

            <Grid.Column width={3}>
              <SideBarRightContainer
                increaseKarmaCount={this.props.increaseKarmaCount}
                currentRepo={this.props.currentRepo} 
                currentUser={this.props.currentUser} 
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
 
export default RepoPage;