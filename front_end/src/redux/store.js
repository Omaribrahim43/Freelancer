// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authreducer from "./AuthReducer"; // Combine all your reducers
const user = JSON.parse(localStorage.getItem("user")) || null;
const  isAuthenticated= !!localStorage.getItem("user");
const initialState = {
  user,
  isAuthenticated
};
const store = createStore(authreducer, initialState, applyMiddleware(thunk));

// Initialize the store with the user data

export  {store};


