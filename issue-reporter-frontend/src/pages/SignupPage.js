import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignupPage extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data =>{
      if (data.token)  {
        localStorage.token = data.token
        this.props.history.push('/repo')
      }
    })
  }


  render () {
    return (
      <div>
        Hi, Im  the SignupPage!

      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username} />
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password} />
        <input type="submit" />
      </form>
      </div>
    );
  }
}

export default withRouter(SignupPage);
