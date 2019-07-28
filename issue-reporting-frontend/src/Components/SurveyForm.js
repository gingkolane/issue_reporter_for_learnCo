import React from 'react'
import { Form } from 'semantic-ui-react'

const surveyForm = () => (
  <Form>

    <Form.Group grouped>
      <label>The reason is: </label>

      <Form.Field control='input' type='radio' name='incompleteReason'
      label="A. Too many labs today, don't have time to complete everything, just want to browse through." />

      <Form.Field control='input' type='radio' name='incompleteReason'
      label="B. Spent a long time on it but can't finish.."  />

      <Form.Field control='input' type='radio' name='incompleteReason'
      label="C. I can't finish it because there is a bug in this lab." />

      <Form.Field control='input' type='radio' name='incompleteReason'
      label="D. Other." />

    </Form.Group>

    <Form.Group grouped>
      <label> I think this lab has some issues, </label>

      <Form.Field control='input' type='radio' name='issueType'
      label="A. but I don't know what the issue is." />

      <Form.Field control='input' type='radio' name='issueType'
      label="B. I know what is going on, I think this is the problem." />

      <Form.Field name='problemAnalysis' control='textarea' rows='1' />

      <Form.Field control='input' type='radio' name='issueType'
      label="C. I fixed it, and this is what I did." />

      <Form.Field name='suggestedFix' control='textarea' rows='1' />

    </Form.Group>

    {/* <Form.Button>Submit</Form.Button> */}
  </Form>
)

export default surveyForm