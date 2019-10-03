import React from 'react';

interface Props {
	data: any
};
interface ComponentState {};

export default class Resume extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const skillmessage = this.props.data.skillmessage;
		const education = this.props.data.education.map(function(education: any){
			return (
				<div key={education.school}>
					<h3><a href="https://wustl.edu/" target="_blank">{education.school}</a></h3>
					<p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}</em></p>
					<p>{education.description}</p>
				</div>
			);
		})
		const work = this.props.data.work.map(function(work: any){
			const CompanyName = (work.website ? <a href={work.website} target="_blank">{work.company}</a> : work.company);
			// console.log(work.website);
			return (
				<div key={work.company}>
					<h3>{CompanyName}</h3>
					<p className="info">{work.title}<span>&bull;</span><em className="date">{work.years}</em></p>
					<p>{work.description}</p>
				</div>
			);
		})
		const skills = this.props.data.skills.map(function(skills: any){
			const className = 'bar-expand '+skills.name.toLowerCase();
			return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
		})
		

		return (
			<section id="resume">
				<div className="Row education">
					<div className="three columns header-col">
						<h1><span>Education</span></h1>
					</div>
					<div className="nine columns main-col">
						<div className="Row item">
							<div className="twelve columns">
								{education}
							</div>
						</div>
					</div>
				</div>
				<div className="Row work">
					<div className="three columns header-col">
						<h1><span>Work</span></h1>
					</div>
					<div className="nine columns main-col">
						{work}
					</div>
				</div>
				<div className="Row skill">
					<div className="three columns header-col">
						<h1><span>Skills</span></h1>
					</div>
					<div className="nine columns main-col">
						<p>{skillmessage}</p>
						<br />
						<div className="bars">
							<ul className="skills">
								{skills}
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}