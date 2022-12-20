import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/sliceFilter';
import s from './Filter.module.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterChange(value));
    setFilter(value);
  };

  return (
    <div className={s.filter}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
        <Form.Control
          name="filter"
          type="text"
          value={filter}
          onChange={handleFilterChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className={s.input_control}
        />
      </InputGroup>
    </div>
  );
};

export default Filter;
