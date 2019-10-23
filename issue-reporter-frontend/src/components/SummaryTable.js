import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { uniqWith, isEqual, countBy } from "lodash";
import matchSorter from "match-sorter";


// define the headers/columns of the table
const columns = [
  {
    Header: " ", 
    columns: [
      {
        Header: "Master repo",
        headerStyle: {fontWeight: "bold"},
        width: 280,
        accessor: "master_repo",
        // Pivot defines custom expander style, and value to appear. 
        // If don't specify Pivot, pivoted fields are displayed using default setting. Default value is row.value(count)
        Pivot: row => {
          return (
            <div>
              <span className="rt-expander"> &bull; </span>
              <span>{row.value}</span>
            </div> 
        )},
        disableExpander: false,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["master_repo"] }),
        filterAll: true
      },
    ]
  },
  { 
    Header: "Lab Completion Data",
    headerStyle: {fontWeight: "bold"},
    columns: [
      {
        Header: "Cohort name",
        headerStyle: {fontWeight: "bold"},
        width: 160,
        accessor: "cohort_name",
        //what does this do? Need to write down comment as soon as possible
        aggregate: (values, rows) => uniqWith(values, isEqual).join(", "),
        Aggregated: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
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
        Cell: cellInfo => null,
        sortAll: true,
        filterable: false
      },

      {
        Header: "Completed",
        headerStyle: {fontWeight: "bold"},
        accessor: "open_issues_count",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        // you can change the color of the text using inline style like so:
        Aggregated: row => <div style={{ textAlign: "center" }} >{row.value}</div>,
        Cell: cellInfo => null,
        sortAll: true,
        filterable: false
      },

      {
        Header: "% completion",
        headerStyle: {fontWeight: "bold"},
        accessor: "percent_completion",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        Aggregated: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
        Cell: cellInfo => null,
        sortAll: true,
        filterable: false
      }
    ]
  },

  { Header: "Survey Results", 
  headerStyle: {fontWeight: "bold"},
    columns: [
      {
        Header: "Survey users",
        headerStyle: {fontWeight: "bold"},
        accessor: "github_username",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        // Aggregated is the top cell in the column that has the subcomponents, it shows the aggregated value of the subcomponent value
        Aggregated: row => <div style={{ textAlign: "center" }}>{row.value.length}</div>,
        //inline style of the cells below aggregate field
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>,
        sortAll: true,
        filterable: true
      },

      {
        Header: "Incomplete reason*",
        headerStyle: {fontWeight: "bold"},
        width: 150,
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
        sortable: false,
        filterable: false
      },

      {
        Header: "Problem analysis",
        headerStyle: {fontWeight: "bold"},
        width: 180,
        accessor: "problemAnalysis",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        Aggregated: row => <span>{row.value}</span>,
        sortable: false,
        filterable: false
      },

      {
        Header: "Suggested fix",
        headerStyle: {fontWeight: "bold"},
        width: 160,
        accessor: "suggestedFix",
        aggregate: (values, rows) => uniqWith(values, isEqual),
        Aggregated: row => <span>{row.value}</span>,
        sortable: false,
        filterable: false
      }
    ]}
]

class SummaryTable extends Component {

  // state = {
  //   hardRepos: [], 
  //   surveys: []
  // }

  // componentDidMount(){
  //   fetch('http://localhost:3000/repos')
  //   .then(res => res.json())
  //   .then(repos => {
  //     this.setState({ hardRepos: repos})
  //   })

  //   //get surveys data
  //   fetch("http://localhost:3000/surveys")
  //   .then(resp => resp.json())
  //   .then(surveys => this.setState({ surveys: surveys }))
  // }

// define the data that goes into the table
  makeData = (repos, surveys) => {
  
    let allSurveys = [];
    repos.map(repo => {
      const surveysOfRepo = this.props.surveys.filter(survey => survey.repo_name === repo.name)
      return surveysOfRepo.map(survey => {
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
        return allSurveys.push(oneSurvey);
      });
    })
    return allSurveys;
  }

  render() {

  const data = this.makeData(this.props.hardRepos, this.props.surveys)
  
  return (
    <>
    <div>
      <ReactTable
        data={data}
        columns={columns}
        pivotBy={["master_repo"]}
        defaultPageSize={20}
        filterable
        //todo: Add sort default by % completion
        //ToDo: add icon for sort: % completion, total forked, master repo, cohort_name
        //ToDo: Add filter place holder: "Search by Name"
      />
    </div>
    <div>
      <h4>* Incomplete reason answer choices:  </h4>
        <li>A. Too many labs today, don't have time to complete everything, just want to browse through.</li>
        <li>B. Spent a long time on it but can't finish.</li>
        <li>C. I can't finish it because there is a bug in this lab.</li>
        <li> D. I don't know how to do this lab.</li>
    </div>
    </>
    );
  }
}

export default SummaryTable;

// Another way to makeData, using spread operator
// makeData = (repos, surveys) => {

//   const repoWithSurveys = repos.map(repo => {

//     const surveysOfRepo = surveys.filter(survey => survey.repo_name === repo.name);

//     return {...repo, surveysOfRepo}
  
//   })

//   console.log(repoWithSurveys)
//   return repoWithSurveys;

// }

// Another way to provide data, using this.props.repos, this.props.surveys
      // <div>
      //   <ReactTable
      //     data={this.props.repos}
      //     columns={columns}
      //     // SubComponent={row.Original.children} 
      //     defaultPageSize={10}

      //     SubComponent={row => {
      //       return (
      //         <div>
      //           <ReactTable
      //             data={this.props.surveys}
      //             columns={columnsInner}
      //             showPagination=false
      //           />
      //         </div>
      //       )}}
      //     />
      // </div>