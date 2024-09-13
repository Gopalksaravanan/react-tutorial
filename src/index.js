import React from 'react';
import ReactDOM from 'react-dom';

import Greeting from "./classComponent";
import Lifecycle from './lifecycle';

ReactDOM.render(
  <React.StrictMode>
    <Greeting />
    <Lifecycle />
  </React.StrictMode>,
  document.getElementById('root')
);
