import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react'
import GraphicsContainer from "./containers/GraphicsContainer";
import AllReposTable from "./components/AllReposTable";
import SurveyResultsTable from './components/SurveyResultsTable';


class TableauPage extends Component {

  state = {
    selectedRepo: {},
    surveysOfSelectedRepo: []
  }

  handleTableRepoClick = (repoid) => {
    let clickedRepo = this.props.repos.find(repo => repo.id === repoid)
    let surveysForClickedRepo = this.props.surveys.filter(survey => survey.repo_id === repoid)
    this.setState({ selectedRepo: clickedRepo });
    this.setState({ surveysOfSelectedRepo: surveysForClickedRepo });
  }

  render() { 
    return ( 
      <>
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
              handleTableRepoClick={this.handleTableRepoClick}
              selectedRepo={this.state.selectedRepo}
              />
            </Grid.Column>

            <Grid.Column width={16}>
              <SurveyResultsTable surveysOfSelectedRepo={this.state.surveysOfSelectedRepo} users={this.props.users} selectedRepo={this.state.selectedRepo}/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </>
     );
  }
}
 
export default TableauPage;