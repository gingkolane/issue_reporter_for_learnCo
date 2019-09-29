import React, { Component } from 'react';
import tableau from 'tableau-api'; 
import TopNavContainerTeacher from "../containers/TopNavContainerTeacher";

// import { Grid, Divider } from 'semantic-ui-react'
// import GraphicsContainer from "./containers/GraphicsContainer";
// import AllReposTable from "./components/AllReposTable";
// import SurveyResultsTable from './components/SurveyResultsTable';


class TeacherPage extends Component {

  componentDidMount() {  
    this.initViz()  
  }  
  
  initViz() {  
    const vizUrl = 'https://10ax.online.tableau.com/t/gingkolanedev877617/views/Studentreporter/CompletionStudy?:origin=card_share_link&:embed=n';
    const vizContainer = this.vizContainer;  
    let viz = new window.tableau.Viz(vizContainer, vizUrl)  
  }  
  
  render() {  
    return (  
      <>
      <TopNavContainerTeacher
        currentUser={this.props.currentUser}  //for persist currentUser
        />

        <div ref={(div) => { this.vizContainer = div }}>  
        </div>
      </>  
    )  
  }  

}

 
export default TeacherPage;