import React from 'react';
// import ReactDOM from 'react-dom';
import registerServiceWorker from '../javascript/registerServiceWorker';
import Router from '../javascript/router';
import ''
import '../styles/default.css';
import '../styles/layout.css';
import '../styles/secondary_pages.css';
import '../styles/media_queries.css';
import '../styles/font-awesome/css/font-awesome.css';
import '../styles/fontello/css/animation.css';
import '../styles/fontello/css/fontello-codes.css';
import '../styles/fontello/css/fontello-ie7-codes.css';
import '../styles/fontello/css/fontello-ie7.css';

export default function Home() {
	return <div><Router /></div>
}

// ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();