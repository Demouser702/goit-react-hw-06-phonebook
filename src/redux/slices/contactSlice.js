import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const existingContact = state.find(
        contact => contact.id === action.payload.id
      );
      if (!existingContact) {
        state.push(action.payload);
      }
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = state => state.contacts;
export const contactsReducer = contactSlice.reducer;
