import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './javascript/registerServiceWorker';
import Router from './javascript/router';

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();