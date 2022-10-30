import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./todos-actions";
import contacts from "../contacts";

const items = createReducer(contacts, {
  [addContact]: (state, action) => [...state, action.payload],
  // [addContact]: (state, action) => (state = state.push(action.payload)),
  [deleteContact]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
  // [filterContact]:(state,action)=>state.
});

const filter = createReducer("", {
  [filterContact]: (_, action) => action.payload,
});

// const preventContacts = (state = contacts) => state;

export default combineReducers({
  //   contacts: preventContacts,
  //   items: contactsReducer,
  items,
  filter,
  //   reducer: {
  //     items: contactsReducer,
  //     filter,
  //   },
});
