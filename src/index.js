import React from 'react'; // Imports the React library
import ReactDOM from 'react-dom/client'; // Imports the ReactDOM library
import App from './App'; // Imports the App component from App file

const root = ReactDOM.createRoot(document.getElementById('root'));
// Create a root element using the ReactDOM library and the 'root' DOM element
root.render(
  // Render the App component within a strict mode wrapper
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
