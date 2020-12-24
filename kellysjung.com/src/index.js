import React from 'react';
import ReactDOM from 'react-dom';
import Router from './main_pages/router';
import registerServiceWorker from './javascript/registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();