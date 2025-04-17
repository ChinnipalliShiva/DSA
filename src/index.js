// // src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit-src/app/store";
import App from "./redux-toolkit-src/App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Creating a root element
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// not redux
// src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
// // import { Provider } from "react-redux";
// // import { store } from "./muiDatagrid/state";
// import App from "./materialTable/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Render the app without Redux (no Provider)
// root.render(<App />);
