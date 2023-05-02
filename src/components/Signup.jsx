import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

function SignupPage() {
    const {emailAddrs, setEmailAddrs} = useState('');
    const element = [
      {label: 'Email Address', type: 'email'},
      {label: 'First Name', type: 'text'},
      {label: 'Password', type: 'password'},
    ];
  return (
    <Form>
      {element.map((elem) => {
        return(
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.label>{elem.label}</Form.label>
          <Form.Control type={elem.type} placeholder='email'></Form.Control>
          </Form.Group>
        );
      })}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h3>Hi</h3>
      <h3>Your Firstname is {emailAddrs}</h3>
      <h3>Your Password is {emailAddrs}</h3>
    </Form>
  );
    }

export default SignupPage;