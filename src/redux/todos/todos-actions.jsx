import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", ({ id, name, phone }) => ({
  payload: {
    id,
    name,
    phone,
  },
}));

const deleteContact = createAction("contact/delete");

const filterContact = createAction("contact/filter");

export { addContact, deleteContact, filterContact };

// const addContact = createAction("contact/add", (text) => []);
