import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import {ApiDemo} from "./components/ApiDemo"
import {ApiDemoCard} from './components/ApiDemoCard'
import {FakeStoreAPI} from "./components/FakeStoreAPI"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FakeStoreAPI />
  </React.StrictMode>
);
