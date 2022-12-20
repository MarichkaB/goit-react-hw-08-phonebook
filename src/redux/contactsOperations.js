import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAPI } from 'services/contactsAPI';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      return await contactsAPI.getContacts();
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await contactsAPI.addContact(contact);
      return result;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      dispatch(fetchContactsThunk());
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
