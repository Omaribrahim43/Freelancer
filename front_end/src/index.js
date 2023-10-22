import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Fetch from './redux/datafetch'

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="210734958461-0baab4ickaoih8kd89q3406hr7963o9o.apps.googleusercontent.com">
      <React.StrictMode>
        <Fetch/>
        <App />
      </React.StrictMode>
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
