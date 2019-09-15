import React from 'react';
// import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Portfolio from './Components/Portfolio';
import Data from './resumeData.json';

interface Props {};
interface ComponentState {};

export default class App extends React.Component<Props, ComponentState> {
	// constructor(props: props){
	// 	super(props);
	// 	this.state = {
	// 	foo: 'bar',
	// 	resumeData: {}
	// 	};

	render(): JSX.Element {
		return (
		<div className="App">
			<Header Data={Data.Main} />
			<About Data={Data.Main} />
			<Resume Data={Data.resume} />
			{/* <Portfolio Data={Data.portfolio} /> */}
			<Contact Data={Data.Main} />
			<Footer Data={Data.Main} />
		</div>
		);
	}
}