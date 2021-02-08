import React from 'react';
import ReactDOM, {hydrate} from 'react-dom';
import App from './component/_base/App';
import reportWebVitals from './reportWebVitals';

/**
 * css import
 */
import './assets/css/_base/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement: any  = document.getElementById("root");
const app: any = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement
  );
}

reportWebVitals();
