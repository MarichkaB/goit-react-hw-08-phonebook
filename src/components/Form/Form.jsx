import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contactsOperations';
import { selectContacts, selectIsLoading } from 'redux/selector';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Circles } from 'react-loader-spinner';
import s from './Form.module.css';

const FormContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const nameToCheck = name.toLowerCase();
    const isIncludeName = contacts.some(
      contact => contact.name.toLowerCase() === nameToCheck
    );
    if (isIncludeName) {
      toast.warn(`${name} is already in your contacts!`, {
        position: 'top-center',
        autoClose: 2500,
        theme: 'light',
      });
      return;
    }
    const profile = { name, number };
    dispatch(addContactThunk(profile));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
          <Form.Control
            value={name}
            onChange={handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            className={s.input_control}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Number
          </InputGroup.Text>
          <Form.Control
            value={number}
            onChange={handleInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            className={s.input_control}
          />
        </InputGroup>
        <Button
          disabled={isLoading}
          type="submit"
          // variant="outline-primary"
          className={s.button_form}
        >
          {isLoading ? (
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            'Add contact'
          )}
        </Button>
      </form>
    </div>
  );
};

export default FormContacts;
