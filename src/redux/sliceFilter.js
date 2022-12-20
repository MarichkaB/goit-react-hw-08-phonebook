import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    filterChange: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;
