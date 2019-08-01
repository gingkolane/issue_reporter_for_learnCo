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
