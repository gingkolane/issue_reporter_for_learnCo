import React, { Component } from 'react';
import {tableau} from 'tableau-api'; 
import TopNavContainerTeacher from "../containers/TopNavContainerTeacher";
import { Grid, Divider } from 'semantic-ui-react'
import SummaryTable from "../components/SummaryTable"
// import GraphicsContainer from "./containers/GraphicsContainer";
// import SurveyResultsTable from './components/SurveyResultsTable';

class TeacherPage extends Component {

  state = {
    surveys:[], 
    hardRepos: []
  }

  // handleTableRepoClick = (repoid) => {
  //   let clickedRepo = this.props.repos.find(repo => repo.id === repoid)
  //   let surveysForClickedRepo = this.props.surveys.filter(survey => survey.repo_id === repoid)
  //   this.setState({ selectedRepo: clickedRepo });
  //   this.setState({ surveysOfSelectedRepo: surveysForClickedRepo });
  // }

  componentDidMount() {
    if (!localStorage.token) {
      this.props.history.push("/")
    } else {
      // display tableau embed
      this.initViz() 

      //get surveys data
      fetch(`${process.env.REACT_APP_API_URL}/surveys`)
      .then(resp => resp.json())
      .then(surveys => this.setState({ surveys: surveys }))

      fetch(`${process.env.REACT_APP_API_URL}/repos`)
      .then(res => res.json())
      .then(repos => {
        this.setState({ hardRepos: repos})
      })
    }
  }
  
  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/Studentreporter/CompletionStudy?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link'
    const vizContainer = this.vizContainer;  
    let viz = new window.tableau.Viz(vizContainer, vizUrl)  
  }  
  
  render() {  
    return (  
      <>
        <TopNavContainerTeacher
          currentUser={this.props.currentUser}  //for persist currentUser
        />

        <Grid celled>
          <Grid.Row>

          <Grid.Column width={16}>
            <p>This lab completion study is performed on the dataset of Access Lab's  25 cohorts from 2018 to 2019. It is the results of 512 students working on 497 study labs.</p>
          </Grid.Column>

          <Grid.Column width={16}>
            {/* this is the tableau graphic enbed */}
            <div ref={(div) => { this.vizContainer = div }}>  
            </div>
          </Grid.Column>

          <Divider />

          <Grid.Column width={16}>
            <p>Table below shows study labs with less than 50% completion rate from the dumbo-web-051319 student cohorts. 
            </p>
          </Grid.Column>

          <Grid.Column width={16}>
            <SummaryTable
              hardRepos={this.state.hardRepos} 
              surveys={this.state.surveys}
            />
          </Grid.Column>

        {/* <Grid.Column width={16}>
          <SurveyResultsTable surveysOfSelectedRepo={this.state.surveysOfSelectedRepo} users={this.props.users} selectedRepo={this.state.selectedRepo}/>
        </Grid.Column> */}

      </Grid.Row>
    </Grid>
      </>  
    )  
  }  

}

 
export default TeacherPage;

