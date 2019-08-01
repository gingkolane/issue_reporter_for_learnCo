import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react'
import TopNavContainer from "./containers/TopNavContainer";
import GraphicsContainer from "./containers/GraphicsContainer";
import AllReposTable from "./components/AllReposTable";


class RepoAnalyticsPage extends Component {

  render() { 
    return ( 
      <>
        <TopNavContainer
          repos={this.props.repos} //for curriculum dropdown
          handleRepoClick={this.handleRepoClick}  // handle dropdown click
          currentUser={this.props.currentUser}  //for login
        />
        
        <Grid celled>
          <Grid.Row>
            
            <Grid.Column width={16}>
              <GraphicsContainer
              repos={this.props.repos} 
              surveys={this.props.surveys}
              />
              <Divider />
              </Grid.Column>
            
            <Grid.Column width={16}>
              <AllReposTable
              repos={this.props.repos} 
              surveys={this.props.surveys}
              handleTableRepoClick={this.props.handleTableRepoClick}
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </>
     );
  }
}
 
export default RepoAnalyticsPage;