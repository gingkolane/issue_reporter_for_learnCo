import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class AllReposTable extends Component {

  handleClick = (e) => {
    // debugger
    // e.target.innerHTML.style.color = "red"
    //grab the repo_id the repo selected using dataset set up in the Table.call
    let repoid = parseInt(e.target.dataset.repoid)
    this.props.handleTableRepoClick(repoid)
    this.props.history.push('/analytics/1')
  }

  render() { 
    // const schoolData = this.props.repos
    // const cohortData = this.props.repos.filter(repo => repo.name.indexOf('dumbo-web-051319'))

    const displayOneRepoData = this.props.repos.map(repo => {
      return (
        <Table.Row key={repo.github_repo_id}>
          <Table.Cell data-repoid={repo.id} onClick={this.handleClick}>{repo.name}</Table.Cell>
          <Table.Cell>{repo.forks_count} </Table.Cell>
          <Table.Cell>{repo.open_issues_count} </Table.Cell>
          <Table.Cell>{parseInt(repo.forks_count) - parseInt(repo.open_issues_count)}</Table.Cell>
          {/* <Table.Cell>Issue reported: </Table.Cell>
      
          <Table.Cell>20</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>8</Table.Cell> */}
        </Table.Row>
      )}
    )

    // const CohortData = this.props.repos.filter(repo => repo.name.indexOf('dumbo-web-051319'))

    return(
      <>
      <h1>Hi from Table</h1>
      <Table celled structured textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Lab name</Table.HeaderCell>
          <Table.HeaderCell colSpan='4' background-color='blue'>Flatiron at large</Table.HeaderCell>
          {/* <Table.HeaderCell colSpan='4' background-color='purple'>Dumbo-web-051319</Table.HeaderCell> */}
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Total forked</Table.HeaderCell>
          <Table.HeaderCell>Completed</Table.HeaderCell>
          <Table.HeaderCell>Incomplete</Table.HeaderCell>
          {/* <Table.HeaderCell>Issue reported</Table.HeaderCell>


          <Table.HeaderCell>Total forked</Table.HeaderCell>
          <Table.HeaderCell>Completed</Table.HeaderCell>
          <Table.HeaderCell>Incomplete</Table.HeaderCell>
          <Table.HeaderCell>Issue reported</Table.HeaderCell> */}

        </Table.Row>
      </Table.Header>
  
      <Table.Body textalign='center'>
          {displayOneRepoData}
   

        {/* <Table.Row>
        <Table.Cell>Repo 2</Table.Cell>
          <Table.Cell>500</Table.Cell>
          <Table.Cell>300</Table.Cell>
          <Table.Cell>200</Table.Cell>
          <Table.Cell>150</Table.Cell>

          <Table.Cell>20</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>8</Table.Cell>
        </Table.Row> */}

      </Table.Body>
    </Table>
    </>
    );
  }
}
 
export default AllReposTable;
