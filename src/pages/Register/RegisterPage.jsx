import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/authOperations';
import Container from 'components/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import s from './registerPage.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
      const profile = { name, email, password };
      await dispatch(registerThunk(profile)).unwrap();
      toast.success(`Welcome, ${name}`);
      navigate('/', { replace: true });
      formReset();
    } catch (error) {
      toast.error(`Something went wrong'`);
    }
  };

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h2 className={s.reg_title}>Registration</h2>

      <Form onSubmit={handleFormsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
            className={s.input_control}
          />
        </Form.Group>

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
            placeholder="Enter password"
            required
            className={s.input_control}
          />
          <Form.Text className={s.text_muted}>
            Don't tell your password to anyone!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className={s.button_form}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
