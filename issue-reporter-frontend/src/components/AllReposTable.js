import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class AllReposTable extends Component {

  handleClick = (e) => {
    // e.target.innerHTML.style.color = "red"
    //grab the repo_id the repo selected using dataset set up in the Table.call
    let repoid = parseInt(e.target.dataset.repoid)
    this.props.handleTableRepoClick(repoid)
  }

  render() { 

    const displayOneRepoData = this.props.repos.map(repo => {
      return (
        <Table.Row key={repo.github_repo_id}>
          <Table.Cell data-repoid={repo.id} onClick={this.handleClick}>{repo.name}</Table.Cell>
          <Table.Cell>{repo.forks_count} </Table.Cell>
          <Table.Cell>{repo.open_issues_count} </Table.Cell>
          <Table.Cell>{parseInt(repo.forks_count) - parseInt(repo.open_issues_count)}</Table.Cell>      
          <Table.Cell>{repo.reason_A}</Table.Cell>
          <Table.Cell>{repo.reason_B}</Table.Cell>
          <Table.Cell>{repo.reason_C}</Table.Cell>
          <Table.Cell>{repo.reason_D}</Table.Cell>
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
          <Table.HeaderCell colSpan='3' background-color='blue'>Flatiron at large</Table.HeaderCell>
          <Table.HeaderCell colSpan='4' background-color='purple'>Survey result: incomplete reason</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Total forked</Table.HeaderCell>
          <Table.HeaderCell>Completed</Table.HeaderCell>
          <Table.HeaderCell>Incomplete</Table.HeaderCell>

          <Table.HeaderCell>A</Table.HeaderCell>
          <Table.HeaderCell>B</Table.HeaderCell>
          <Table.HeaderCell>C</Table.HeaderCell>
          <Table.HeaderCell>D</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
  
      <Table.Body textalign='center'>
          {displayOneRepoData}
   

      </Table.Body>
    </Table>
    </>
    );
  }
}
 
export default AllReposTable;
