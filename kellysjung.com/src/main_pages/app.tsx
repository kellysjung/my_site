import React from 'react';
import About from '../ccomponents/aabout';
import Contact from '../ccomponents/ccontact';
import Footer from '../ccomponents/ffooter';
import Header from '../ccomponents/hheader';
import MyStory from '../ccomponents/mmy_story';
import Resume from '../ccomponents/resume';
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