import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './components/router';

// for if I want to go back to single page
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();