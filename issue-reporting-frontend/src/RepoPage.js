import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import SideBarRightContainer from "./containers/SideBarRightContainer";
import RepoContainer from "./containers/RepoContainer";

class RepoPage extends Component {


    //   this.props.currentRepo !== {} &&
    // fetch(`https://api.github.com/repos/learn-co-students/${this.props.currentRepo.name}/readme`)
    // .then(resp => resp.json())
    // .then(readme => this.setState({ readme: readme }))

  render() { 

    return ( 
      <>
        <Grid celled='internally'>

          <Grid.Row>

            <Grid.Column width={13}>
              <RepoContainer 
                currentRepo={this.props.currentRepo} 
              />

            </Grid.Column>

            <Grid.Column width={3}>
              <SideBarRightContainer
                increaseKarmaCount={this.props.increaseKarmaCount}
                currentRepo={this.props.currentRepo} 
                currentUser={this.props.currentUser} 
                history={this.props.history}
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </>
     );
  }
}
 
export default RepoPage;