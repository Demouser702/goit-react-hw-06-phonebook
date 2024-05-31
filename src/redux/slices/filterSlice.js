import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      return action.payload;
    },
    resetFilter(state) {
      return initialState;
    },
  },
});

export const { setSearchTerm, resetFilter } = filterSlice.actions;
export const selectFilter = state => state.filter;
export const filterReducer = filterSlice.reducer;
