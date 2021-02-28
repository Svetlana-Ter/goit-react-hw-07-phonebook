import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
});

export default {
  getLoading,
  getContacts,
  getFilter,
  getFilteredContacts,
};
