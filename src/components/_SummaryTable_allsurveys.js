import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import ReactTable from 'react-table';
// import { makeData } from "./Utils";
// import _ from "lodash";
import "react-table/react-table.css";

    // define the data that goes into the table


// define the headers/columns of the table
const columns = [
  {
    Header: "Study Lab Information",
    columns: [
      {
        Header: "Master Repo",
        accessor: "master_repo"
      },
      // {
      //   Header: "Total forked",
      //   accessor: "forks_count"
      // },

      // {
      //   Header: "Completed",
      //   accessor: "open_issues_count"
      // },
      {
        Header: "% completion",
        accessor: "percent_completion"
      }
    ]
  },
  {
    Header: "Survey Results",
    columns: [
      {
        Header: "students",
        accessor: "github_username"
      },
      {
        Header: "Problem Analysis",
        accessor: "problemAnalysis"
        // aggregate: vals => _.sum(vals),
        // Aggregated: row => {
        //   return (
        //     <span>
        //       {row.value}
        //     </span>
        //   );
        // }
        // filterMethod: (filter, row) =>
          // filter.value === `${row[filter.id]} (avg)`
      },
      {
        Header: "Suggested Fix",
        accessor: "suggestedFix"
        // aggregate: vals => _.sum(vals)
        // filterable: false
      }
    ]
  }
];


class SummaryTable extends Component {

makeData = (repos, surveys) => {
  
  let allSurveys = [];

  repos.map(repo => {
    // debugger
    const surveysOfRepo = this.props.surveys.filter(survey => survey.repo_name === repo.name)
    
    surveysOfRepo.map(survey => {
        // debugger
        const oneSurvey = {
          master_repo: repo.master_repo,
          forks_count: repo.forks_count,
          open_issues_count: repo.open_issues_count,
          percent_completion: repo.percent_completion,
          github_username: survey.github_username,
          incompleteReason: survey.incompleteReason,
          suggestedFix: survey.suggestedFix,
          problemAnalysis: survey.problemAnalysis
        }

        allSurveys.push(oneSurvey);
        console.log('allSurveys', allSurveys)
      });
  })
  console.log('allSurveysToReturn', allSurveys)
  debugger
  return allSurveys;
}

  // const data = this.props.repos.map(repo => {

  //   this.props.surveys.filter(survey => survey.repo_name === repo.name).map(survey => {
  //     return {
  //       master_repo: repo.master_repo,
  //       forks_count: repo.forks_count,
  //       open_issues_count: repo.open_issues_count,
  //       percent_completion: repo.percent_completion,
  //       user: survey.github_username,
  //       incompleteReason: survey.incompleteReason,
  //       suggestedFix: survey.suggestedFix,
  //       problemAnalysis: survey.problemAnalysis
  //     }
  //   });
  // });

  render() {
    // if (this.props.surveys) {
    //   const data = this.makeData(this.props.repos, this.props.surveys) 
    //   return data
    // }

// debugger
const data = this.makeData(this.props.repos, this.props.surveys)

    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}

          pivotBy={["percent_completion", "github_username"]}
          // filterable
        />
      </div>
    );
  }
}

export default SummaryTable;