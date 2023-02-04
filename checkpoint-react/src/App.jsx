import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="email" placeholder="Enter Username" />
        <Form.Text className="username">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default App
