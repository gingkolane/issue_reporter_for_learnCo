// import React, { Component } from 'react';

// class LoginPage extends Component {
  
//   render() { 
//     return ( 
//       <>
//         <h1>Hi from Login Page</h1>
//         <p>if user is a student, go to the repo page</p>
//         <p>if user is SCC, go to analytics page</p>
//       </>
//      );
//   }
// }
 
// export default LoginPage;

import React from 'react'
import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react'
import loginheader from './assets/loginheader.png'


const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <div>
        <Image src={loginheader} /> 
      </div>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

{/* how to put this color '#00BCE1' in */}
          <Button color='blue' fluid size='large'>   
            Sign in
          </Button>
        </Segment>
      </Form>
      <Message>
        Don't have an account? Please <a href='localhost:3000/signup'>sign Up.</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm
