import React, { Component } from 'react';
import TopNav from "./containers/TopNav";
import { Grid } from 'semantic-ui-react'
import SideBarRight from "./containers/SideBarRight";
import RepoContainer from "./containers/RepoContainer";

class RepoPage extends Component {
  
  render() { 
    return ( 
      <>
        <TopNav/>

        <Grid celled='internally'>

          <Grid.Row>

            <Grid.Column width={13}>
              <RepoContainer repo={this.props.repo}/>
            </Grid.Column>

            <Grid.Column width={3}>
              <SideBarRight />
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </>
     );
  }
}
 
export default RepoPage;