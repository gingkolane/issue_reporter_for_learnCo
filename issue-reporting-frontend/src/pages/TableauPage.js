import React, { Component } from 'react';
import tableau from 'tableau-api'; 
import TopNavContainer from "../containers/TopNavContainer";

// import { Grid, Divider } from 'semantic-ui-react'
// import GraphicsContainer from "./containers/GraphicsContainer";
// import AllReposTable from "./components/AllReposTable";
// import SurveyResultsTable from './components/SurveyResultsTable';


class TableauPage extends Component {

  componentDidMount() {  
    this.initViz()  
  }  
  
  initViz() {  
    const vizUrl = 'https://10ax.online.tableau.com/t/gingkolanedev877617/views/Studentreporter/Analyzetherepocompletion?:origin=card_share_link&:embed=n';  
    const vizContainer = this.vizContainer;  
    let viz = new window.tableau.Viz(vizContainer, vizUrl)  
  }  
  
  render() {  
    return (  
      <>
        <TopNavContainer
          repos={this.state.repos} //for curriculum dropdown
          handleTopNavRepoClick={this.handleTopNavRepoClick}  // handle dropdown click
          currentUser={this.state.currentUser}  //for login
        />

        <div ref={(div) => { this.vizContainer = div }}>  
        </div>
      </>  
    )  
  }  

}

 
export default TableauPage;