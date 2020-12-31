import React from 'react';
import data from '../data/resumeData.json';

import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/about';
import Resume from '../components/resume';
import Contact from '../components/contact';
import MyStory from '../components/my_story';

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