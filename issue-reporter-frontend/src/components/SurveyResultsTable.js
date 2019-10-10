import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class surveyResultsTable extends Component {

  render() { 
    const displaySurveyCollection = this.props.surveysOfSelectedRepo.map(survey => {
      
      const surveyStudent = this.props.users.find(user => survey.user_id === user.id)
      return (
        <Table.Row key={survey.id}>
          <Table.Cell> {surveyStudent.login} </Table.Cell>
          <Table.Cell> {survey.incompleteReason === "A" && <span>X</span> }</Table.Cell>
          <Table.Cell> {survey.incompleteReason === "B" && <span>X</span> } </Table.Cell>
          <Table.Cell> {survey.incompleteReason === "C" && <span>X</span> } </Table.Cell>
          <Table.Cell> {survey.incompleteReason === "D" && <span>X</span> } </Table.Cell>
          <Table.Cell> {survey.problemAnalysis} </Table.Cell>
          <Table.Cell> {survey.suggestedFix} </Table.Cell>
        </Table.Row>
      )}
    )

    return(
      <>
      <h2>Survey results: {this.props.selectedRepo.name} </h2>
      <Table celled structured textAlign='center'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Student</Table.HeaderCell>
          <Table.HeaderCell colSpan='4' background-color='blue'>Reason not completed</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Problem Analysis</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Suggested Fixes</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>A. Don't have time today, just browsing through.</Table.HeaderCell>
          <Table.HeaderCell>B. Spent a long time on it but can't finish...</Table.HeaderCell>
          <Table.HeaderCell>C. I can't finish it because there is a bug in this lab.</Table.HeaderCell>
          <Table.HeaderCell>D. I don't know how to do this lab.</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body textalign='center'>
          {displaySurveyCollection}
      </Table.Body>
    </Table>
    </>
    );
  }
}
 
export default surveyResultsTable;