import React from 'react';
import ReactDOM from 'react-dom';
import Router from './main_pages/router';
import registerServiceWorker from './javascript/registerServiceWorker';

// for if I want to go back to single page
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();