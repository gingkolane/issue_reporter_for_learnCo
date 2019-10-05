import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class SummaryTable extends Component {

  handleClick = (e) => {
    // e.target.innerHTML.style.color = "red"
    //grab the repo_id the repo selected using dataset set up in the Table.call
    let repoid = parseInt(e.target.dataset.repoid)
    this.props.handleTableRepoClick(repoid)
  }

  render() { 


     console.log('this is repos in summary table', this.props.repos)

    const sortedRepos = this.props.repos.sort((a, b) => (a.percent_completion > b.percent_completion) ? 1 : -1)
    // const sortedRepos = this.props.repos.sort((a, b) => (a.percent_completion > percent_completion) ? 1 : (a.percent_completion === b.percent_completion) ? ((a.forks_count > b.forks_count) ? 1 : -1) : -1 )

    const displaySurveyDataForOneMasterRepo = sortedRepos.map(repo => {
      return (
        <Table.Row key={repo.github_repo_id}>

          <Table.Cell data-repoid={repo.id} onClick={this.handleClick}>{repo.master_repo}</Table.Cell>
          <Table.Cell>{repo.forks_count} </Table.Cell>
          <Table.Cell>{repo.open_issues_count} </Table.Cell>
          <Table.Cell>{repo.percent_completion} </Table.Cell>
          <Table.Cell>{repo.reason_a}</Table.Cell>
          <Table.Cell>{repo.reason_b}</Table.Cell>
          <Table.Cell>{repo.reason_c}</Table.Cell>
          <Table.Cell>{repo.reason_d}</Table.Cell>
          {/* <Table.Cell>{repo.surveys.map(survey => survey.problemAnalysis.join('-'))}</Table.Cell>
          <Table.Cell>{repo.find(repo => repo.id === survey.repos_users_id.surveys.map(survey => survey.suggestedFix.join('-'))}</Table.Cell> */}

        </Table.Row>
      )}
    )
    // const CohortData = this.props.repos.filter(repo => repo.name.indexOf('dumbo-web-051319'))

    return(
      <>
      <h2>Lab completion data</h2>
      <Table celled structured textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Lab name</Table.HeaderCell>
          <Table.HeaderCell colSpan='3' background-color='blue'>Dumbo-Web-051319</Table.HeaderCell>
          <Table.HeaderCell colSpan='6' background-color='purple'>Survey results</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Total forked</Table.HeaderCell>
          <Table.HeaderCell>Completed</Table.HeaderCell>
          <Table.HeaderCell>% completion</Table.HeaderCell>

          <Table.HeaderCell>A</Table.HeaderCell>
          <Table.HeaderCell>B</Table.HeaderCell>
          <Table.HeaderCell>C</Table.HeaderCell>
          <Table.HeaderCell>D</Table.HeaderCell>
          <Table.HeaderCell>problemAnalysis</Table.HeaderCell>
          <Table.HeaderCell>suggestedFix</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body textalign='center'>
          {displaySurveyDataForOneMasterRepo}
      </Table.Body>
    </Table>
    </>
    );
  }
}
 
export default SummaryTable;
