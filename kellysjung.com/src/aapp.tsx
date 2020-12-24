import React from 'react';
import data from './resumeData.json';

import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import MyStory from './Components/My_Story';

interface Props {};
interface ComponentState {};

export default class App extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		return (
		<div className="App">
			<Header data={data.main} />
			<About data={data.main} />
			<Resume data={data.resume} />
			<Contact data={data.main} />
			<MyStory />
			<Footer data={data.main} />
		</div>
		);
	}
}