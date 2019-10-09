import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import ReactTable from 'react-table';
// import { makeData } from "./Utils";
import _ from "lodash";
import "react-table/react-table.css";

    // define the data that goes into the table


// define the headers/columns of the table
const columns = [

  {
    Header: "Survey Results",
    columns: [
      {
        expander: true,
        Header: " Expand for Results ",
        width: 120,
        Expander: ({ isExpanded, ...rest }) =>
          <div>
            {isExpanded
              ? <span>&#x2299;</span>
              : <span>&#x2295;</span>}
          </div>,
        style: {
          cursor: "pointer",
          fontSize: 25,
          padding: "0",
          textAlign: "center",
          userSelect: "none"
        },
        // Footer: () => <span>&hearts;</span>
      }
    ]
  },
  {
    Header: "Study Lab Information",

    columns: [
      {
        Header: "Master Repo",
        accessor: "master_repo"
      },

      {
        Header: "Cohort name",
        accessor: "cohort_name"
      },

      {
        Header: "Total forked",
        accessor: "forks_count"
      },

      {
        Header: "Completed",
        accessor: "open_issues_count"
      },
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
        expander: true,
        Header: " Expand for Results ",
        width: 120,
        Expander: ({ isExpanded, ...rest }) =>
          <div>
            {isExpanded
              ? <span>&#x2299;</span>
              : <span>&#x2295;</span>}
          </div>,
        style: {
          cursor: "pointer",
          fontSize: 25,
          padding: "0",
          textAlign: "center",
          userSelect: "none"
        },
        // Footer: () => <span>&hearts;</span>
      }
    ]
  }  
]


const columnsInner = [

  // {
  //   Header: ""
  //   // accessor: " "
  // },
  // {
  //   Header: ""
  //   // accessor: " "
  // },
  // {
  //   Header: ""
  //   // accessor: " "
  // },
  // {
  //   Header: ""
  //   // accessor: " "
  // },
  {
    Header: "students",
    accessor: "github_username"
  },
  {
    Header: "Incomplete reason",
    accessor: "incompleteReason"
  },
  {
    Header: "Problem Analysis",
    accessor: "problemAnalysis"
  },

  {
    Header: "Suggested Fix",
    accessor: "suggestedFix"
  }
]

class SummaryTable extends Component {

  makeData = (repos, surveys) => {

    const repoWithSurveys = repos.map(repo => {

      const surveysOfRepo = surveys.filter(survey => survey.repo_name === repo.name);

      return {...repo, surveysOfRepo}
    
    })

    console.log(repoWithSurveys)
    return repoWithSurveys;
  
  }


  // subComponent = (row) => {
  //   return (
  //     <ReactTable
  //     data={row.Original.children}
  //     columns={columnsInner}
  //     />
  //   )
  // }


  // let allSurveys = [];

  // repos.map(repo => {
  //   // debugger
  //   const surveysOfRepo = this.props.surveys.filter(survey => survey.repo_name === repo.name)
    
  //   surveysOfRepo.map(survey => {
  //       // debugger
  //       const oneSurvey = {
  //         master_repo: repo.master_repo,
  //         forks_count: repo.forks_count,
  //         open_issues_count: repo.open_issues_count,
  //         percent_completion: repo.percent_completion,
  //         github_username: survey.github_username,
  //         incompleteReason: survey.incompleteReason,
  //         suggestedFix: survey.suggestedFix,
  //         problemAnalysis: survey.problemAnalysis
  //       }

  //       allSurveys.push(oneSurvey);
  //       console.log('allSurveys', allSurveys)
  //     });
  // })
  // console.log('allSurveysToReturn', allSurveys)
  // debugger
  // return allSurveys; */}

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

data.forEach(repo => repo.SubComponent)


console.log("summary table data line 182", data)

    return (
      <div>
        <ReactTable
          data={this.props.repos}
          columns={columns}
          // SubComponent={row.Original.children} 
          defaultPageSize={10}

          SubComponent={row => {
            return (
              <div>
                <ReactTable
                  data={this.props.surveys}
                  columns={columnsInner}
                  showPagination=false
                />
              </div>
            )}}
          />
      </div>
    );
  }
}

export default SummaryTable;