import ContactsList from 'components/ContactsList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import FormContacts from 'components/Form';
import s from './contactsPage.module.css';

const ContactsPage = () => {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <FormContacts />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default ContactsPage;
