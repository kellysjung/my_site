import React from 'react';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import MyStory from '../components/my_story';
import Resume from '../components/resume_new';
import data from '../data/resumeData.json';

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