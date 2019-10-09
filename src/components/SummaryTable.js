import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import ReactTable from 'react-table';
// import { makeData } from "./Utils";
import "react-table/react-table.css";
import { uniqWith, isEqual, sum, countBy, castArray } from "lodash";
import classNames from "classnames";
import matchSorter from "match-sorter";


// define the headers/columns of the table
const columns = [
  { Header: "Lab Completion Data",
    columns: [
      { Header: "",
        width: 35,
        filterable: false,
        resizable: false,
        sortable: false,
        // Aggregated: cellInfo => {
        //   const needsExpander =
        //     cellInfo.subRows && cellInfo.subRows.length > 1 ? true : false;
        //   const expanderEnabled = !cellInfo.column.disableExpander;
        //   return needsExpander && expanderEnabled ? (
        //     <div
        //       className={classNames("rt-expander", cellInfo.isExpanded && "-open")}
        //     >
        //       &bull;
        //     </div>
        //   ) : null;
        // },
        Aggregated: row => {
        return  (
        <div className={classNames("rt-expander")}
        >
        </div>
        )
        },
          Cell: null
      },
      
      { pivot: true },
      
      {
        Header: "Master Repo",
        headerStyle: {fontWeight: "bold"},
        accessor: "master_repo",
        Pivot: row => {
          return <span>{row.value}</span>;
        },
        disableExpander: false,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["master_repo"] }),
        filterAll: true
      },

      {
        Header: "Cohort name",
        headerStyle: {fontWeight: "bold"},
        accessor: "cohort_name",
        aggregate: (values, rows) => uniqWith(values, isEqual).join(", "),
        Aggregated: row => <span>{row.value}</span>,
        Cell: cellInfo => null,
        filterAll: true,
        sortAll: true
        
      },

      {
        Header: "Total forked",
        headerStyle: {fontWeight: "bold"},
        accessor: "forks_count",
        aggregate: (values, rows) => uniqWith(values, isEqual).join(", "),
        // Add styling to aggregated field using inline styling
        Aggregated: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
        // Add styling to rows below aggregated field
        // Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
        Cell: cellInfo => null,
        sortAll: true
      },

      {
        Header: "Completed",
        headerStyle: {fontWeight: "bold"},
        accessor: "open_issues_count",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        // you can change the color of the text using inline style like so:
        Aggregated: row => <div style={{ textAlign: "center" }} >{row.value}</div>,
        Cell: cellInfo => null,
        sortAll: true
      },

      {
        Header: "% completion",
        headerStyle: {fontWeight: "bold"},
        accessor: "percent_completion",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        Aggregated: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
        Cell: cellInfo => null,
        sortAll: true
      }
    ]
  },

  { Header: "Survey Results", 
    columns: [
      {
        Header: "students surveys",
        headerStyle: {fontWeight: "bold"},
        accessor: "github_username",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        // Aggregated is the top cell in the column that has the subcomponents, it shows the aggregated value of the subcomponent value
        Aggregated: row => <div style={{ textAlign: "center" }}>{row.value.length}</div>,
        //inline style of the cells below aggregate field
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
        sortAll: true
      },

      {
        Header: "Incomplete reason",
        headerStyle: {fontWeight: "bold"},
        accessor: "incompleteReason",
        aggregate: (values, rows) => countBy(values),
        Aggregated: row => {
        // need to add comments here
          const resultArr = Object.keys(row.value).sort().map(key =>
            `${key}:${row.value[key]}`)
          return <div style={{ textAlign: "center" }}>{resultArr.join(', ')}</div>
        },
        //inline style of the cells below aggregate field
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
        sortable: false
      },

      {
        Header: "Problem Analysis",
        headerStyle: {fontWeight: "bold"},
        accessor: "problemAnalysis",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        Aggregated: row => <span>{row.value}</span>,
        sortable: false
      },

      {
        Header: "Suggested Fix",
        accessor: "suggestedFix",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        Aggregated: row => <span>{row.value}</span>,
        sortable: false
      }
    ]}
]

class SummaryTable extends Component {

// define the data that goes into the table
  makeData = (repos, surveys) => {
  
    let allSurveys = [];
  
    repos.map(repo => {
      const surveysOfRepo = this.props.surveys.filter(survey => survey.repo_name === repo.name)
      surveysOfRepo.map(survey => {
        const oneSurvey = {
          master_repo: repo.master_repo,
          cohort_name: repo.cohort_name,
          forks_count: repo.forks_count,
          open_issues_count: repo.open_issues_count,
          percent_completion: repo.percent_completion,
          github_username: survey.github_username,
          incompleteReason: survey.incompleteReason,
          suggestedFix: survey.suggestedFix,
          problemAnalysis: survey.problemAnalysis
        }
        allSurveys.push(oneSurvey);
      });
    })
    return allSurveys;
  }

  render() {

  const data = this.makeData(this.props.repos, this.props.surveys)

  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        pivotBy={["master_repo"]}
        defaultPageSize={20}
      />
    </div>
    );
  }
}

export default SummaryTable;