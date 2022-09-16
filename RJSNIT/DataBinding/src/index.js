import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import {DataBind} from "./components/DataBind"
import {DataBindArray} from "./components/DataBindArray"
import {DataBindObject} from "./components/DataBindObject"
import {DataBindState} from './components/DataBindState'
import {DataBindStateComponent} from "./components/DataBindStateComponent"
import {DataBinduseState} from "./components/DataBinduseState"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataBinduseState />
  </React.StrictMode>
);
