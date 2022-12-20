import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'components/Container';
import s from './loginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleFormsubmit = async evt => {
    evt.preventDefault();
    try {
      const loginData = { email, password };
      await dispatch(loginThunk(loginData)).unwrap();
      toast.success(`Login successful, welcome!`);
      formReset();
    } catch (error) {
      toast.error('Email or password is incorrect!');
    }
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleFormsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className={s.input_control}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
            className={s.input_control}
          />
          <Form.Text className={s.text_muted}>
            Don't tell your password to anyone!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className={s.button_form}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
