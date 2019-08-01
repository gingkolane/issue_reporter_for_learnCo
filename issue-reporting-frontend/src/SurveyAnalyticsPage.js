import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react'
// import TopNavContainer from "./containers/TopNavContainer";
// import GraphicsContainer from "./containers/GraphicsContainer";


class SurveyAnalyticsPage extends Component {


  render() { 
    return ( 
      <>
        {/* <TopNavContainer/> */}
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={16}>
            <h1>Repo name</h1>
              {/* we need to pass in to GraphicsContainer: repos={repos} surveyResults={this.props.surveyResults} */}
              <Divider />
              </Grid.Column>
            <Grid.Column width={16}>
              {/* <GraphicsContainer/> */}
              {/* we need to pass in to GraphicsContainer: repos={repos} surveyResults={this.props.surveyResults} */}
              <Divider />
              </Grid.Column>
            
            <Grid.Column width={16}>
              <h1>Hi from summary div</h1> */}
              {/* we need to pass in to AllReposTable: repos={repos} surveyResults={this.props.surveyResults} */}
              <div>
              <p> Hi from Survey summary</p>
              <p> Incomplete reason table</p>
              <p>Problem analysis</p>
              <p>Suggested fix</p>
              </div>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </>
     );
  }
}
 
export default SurveyAnalyticsPage;