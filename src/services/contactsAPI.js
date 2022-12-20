import { privateAPI } from './API';

const getContacts = async () => {
  const response = await privateAPI.get('/contacts');
  return response.data;
};

const addContact = async contact => {
  const response = await privateAPI.post('/contacts', contact);
  return response.data;
};

const deleteContact = async contactId =>
  await privateAPI.delete(`/contacts/${contactId}`);

export const contactsAPI = {
  getContacts,
  addContact,
  deleteContact,
};
