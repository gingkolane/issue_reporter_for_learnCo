import React, { Component } from 'react';
import { Segment, Portal, Header} from 'semantic-ui-react'
import SurveyForm from '../components/SurveyForm.js'


class SidBarRightContainer extends Component {
  
  state = { open: false }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => {
  
    this.setState({ open: false })
  }


  render() { 
    const { open } = this.state
    return(
      <>
        <Segment inverted tertiary color='violet'>Ask a Question</Segment>
        <Segment inverted tertiary color='grey'>Questions Need Help</Segment>
        <Segment >Fork this lab</Segment>
        <Segment >Run Local Tests</Segment>
        <Segment >Submit Pull Request</Segment>
        <Segment 
          inverted color='blue' tertiary 
          onClick={this.handleOpen}
          disabled={open}
          positive
        > NEXT LESSON</Segment>

          <Portal onClose={this.handleClose} open={open}>
            <Segment
              style={{
                left: '20%',
                position: 'fixed',
                top: '10%',
                zIndex: 1000,
              }}
            >
              <Header>Proceed to next lesson?</Header>
              <p>Please tell us why you did not complete this lab:</p>
              <SurveyForm
                increaseKarmaCount={this.props.increaseKarmaCount} 
                currentUser={this.props.currentUser} 
                currentRepo={this.props.currentRepo}
                goToNextRepo={this.props.goToNextRepo}
                handleClose={this.handleClose}
              />

              {/* <Button
                content='Nevermind'
                negative
                onClick={this.handleClose}
              /> */}
            </Segment>
          </Portal>
      </>
    );
  }
}
 
export default SidBarRightContainer;