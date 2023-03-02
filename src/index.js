import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./Assets/css/adipoli.css";
import "./Assets/css/booking.css";
import "./Assets/css/camera.css";
import "./Assets/css/font-awesome.css";
import "./Assets/css/form.css";
import "./Assets/css/grid.css";
import "./Assets/css/ie.css";
import "./Assets/css/reset.css";
import "./Assets/css/skeleton.css";
import "./Assets/css/style.css";
import "./Assets/css/superfish.css";
import "./Assets/css/touchTouch.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
