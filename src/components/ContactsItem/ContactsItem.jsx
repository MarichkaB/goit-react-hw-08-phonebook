import { deleteContactThunk } from 'redux/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import CloseButton from 'react-bootstrap/CloseButton';
import { selectIsLoading } from 'redux/selector';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

export const ContactsItem = ({ name, phone, id }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  return (
    <div className={s.contact__item}>
      <span>{name}</span>
      <span className={s.phone}>{phone}</span>
      <CloseButton
        disabled={isLoading}
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      />
    </div>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
