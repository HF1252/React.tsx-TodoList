import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Pages/Todo';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, far);

ReactDOM.render(
    <React.StrictMode>
        <Todo />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
