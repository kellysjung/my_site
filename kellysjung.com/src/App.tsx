import React from 'react';
import data from './resumeData.json';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import MyStory from './components/My_Story';

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