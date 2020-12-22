import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/router';
import registerServiceWorker from './registerServiceWorker';

// for if I want to go back to single page
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();