import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class SurveyForm extends Component {
  
  state = { 
    incompleteReason:'',
    issueType:'',
    problemAnalysis:'',
    suggestedFix:''
   }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
   }

  handleSubmit = (e) => {

    e.preventDefault();

    fetch("http://localhost:3000/surveys", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepted': 'application/json'
      },
      body: {
        incompleteReason: this.state.incompleteReason,
        issueType: this.state.issueType,
        problemAnalysis: this.state.problemAnalysis,
        suggestedFix: this.state.suggestedFix
      }
    })
  }

  render() { 
    // const { value } = this.state
    return (  
      <Form onSubmit={this.handleSubmit}>
  
      <Form.Group grouped>
          <label>The reason is:</label>
          <Form.Radio
            name='incompleteReason'
            label="A. Too many labs today, don't have time to complete everything, just want to browse through."
            value='A'
            checked={this.state.incompleteReason === 'A'}
            onChange={this.handleChange}
          />
          <Form.Radio
            name='incompleteReason'
            label="B. Spent a long time on it but can't finish.."
            value='B'
            checked={this.state.incompleteReason === 'B'}
            onChange={this.handleChange}
          />
          <Form.Radio
            name='incompleteReason'
            label="C. I can't finish it because there is a bug in this lab."
            value='C'
            checked={this.state.incompleteReason === 'C'}
            onChange={this.handleChange}
          />
          <Form.Radio
            name='incompleteReason'
            label="D. Other."
            value='D'
            checked={this.state.incompleteReason === 'D'}
            onChange={this.handleChange}
          />
        </Form.Group>

      <Form.Group grouped>
        <label> I think this lab has some issues, </label>
          <Form.Radio
            name='issueType'
            label="A. but I don't know what the issue is."
            value='A'
            checked={this.state.issueType === 'A'}
            onChange={this.handleChange}
          />
          <Form.Radio
            name='issueType'
            label="B. I know what is going on, I think this is the problem."
            value='B'
            checked={this.state.issueType === 'B'}
            onChange={this.handleChange}
          />
          <Form.TextArea name='problemAnalysis' rows='1' onChange={this.handleChange} />

          <Form.Radio
            name='issueType'
            label="C. I fixed it, and this is what I did."
            value='C'
            checked={this.state.issueType === 'C'}
            onChange={this.handleChange}
          />
          <Form.TextArea name='suggestedFix' rows='1' onChange={this.handleChange} />
      </Form.Group>
  
      <Form.Button>Submit</Form.Button>
    </Form>

    );
  }
}
 
export default SurveyForm;