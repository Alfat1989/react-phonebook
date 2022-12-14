import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import todosReducer from "./todos/todos-reducer";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
