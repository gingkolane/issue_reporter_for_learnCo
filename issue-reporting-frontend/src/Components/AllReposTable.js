import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react'

class AllReposTable extends Component {
  
  render() { 
    return(
      <>
      <h1>Hi from Table</h1>
      <Table celled structured textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Lab name</Table.HeaderCell>
          <Table.HeaderCell colSpan='4' background-color='blue'>Flatiron at large</Table.HeaderCell>
          <Table.HeaderCell colSpan='4' background-color='purple'>Dumbo-web-051319</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Total forked</Table.HeaderCell>
          <Table.HeaderCell>Completed</Table.HeaderCell>
          <Table.HeaderCell>Incomplete</Table.HeaderCell>
          <Table.HeaderCell>Issue reported</Table.HeaderCell>
          <Table.HeaderCell>Total forked</Table.HeaderCell>
          <Table.HeaderCell>Completed</Table.HeaderCell>
          <Table.HeaderCell>Incomplete</Table.HeaderCell>
          <Table.HeaderCell>Issue reported</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
  
      <Table.Body textAlign='center'>
        <Table.Row>
          <Table.Cell>Repo 1</Table.Cell>
          <Table.Cell>500</Table.Cell>
          <Table.Cell>300</Table.Cell>
          <Table.Cell>200</Table.Cell>
          <Table.Cell>150</Table.Cell>

          <Table.Cell>20</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>8</Table.Cell>
        </Table.Row>

        <Table.Row>
        <Table.Cell>Repo 2</Table.Cell>
          <Table.Cell>500</Table.Cell>
          <Table.Cell>300</Table.Cell>
          <Table.Cell>200</Table.Cell>
          <Table.Cell>150</Table.Cell>

          <Table.Cell>20</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>8</Table.Cell>
        </Table.Row>

      </Table.Body>
    </Table>
    </>
    );
  }
}
 
export default AllReposTable;
