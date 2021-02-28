import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contact/fetchContactsRequest');
const fetchContactsSuccess = createAction('contact/fetchContactsSuccess');
const fetchContactsError = createAction('contact/fetchContactsError');

const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contact/addContactError');

const deleteContactRequest = createAction('contact/deleteContactRequest');
const deleteContactSuccess = createAction('contact/deleteContactSuccess');
const deleteContactError = createAction('contact/deleteContactError');

const changeFilter = createAction('contact/filterChange');

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};
