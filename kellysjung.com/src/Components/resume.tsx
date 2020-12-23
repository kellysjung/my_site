import React from 'react';

interface Props {
	data: any
};
interface ComponentState {};

export default class Resume extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const SkillsMessage = this.props.data.skillmessage;
		const EducationSection = this.props.data.education.map(function(education: {school: string, degree: string, graduated: string, description: string}){
			return (
				<div key={education.school}>
					<h3><a href="https://wustl.edu/" rel="noopener noreferrer" target="_blank">{education.school}</a></h3>
					<p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}</em></p>
					<p>{education.description}</p>
				</div>
			);
		})
		
		const WorkSection = this.props.data.experience.map(function(experience: {company: string, website: string, positions: any[]}){
			let Positions: JSX.Element[] = [];
			const CompanyName = (experience.website ? <a href={experience.website} target="_blank" rel="noopener noreferrer">{experience.company}</a> : experience.company);
			
			experience.positions.map(function(positions: {title: string, years: string, description: string}){
				Positions.push(
					<span key={positions.title+"_section"}>
						<p className="info">{positions.title}<span>&bull;</span><em className="date">{positions.years}</em></p>
						<div className='PositionContainer'>
							<div><p className='PositionDescription'>{positions.description}</p></div>
						</div>
					</span>
				);
				return Positions;
			})
		
			return (
				<div key={experience.company}>
					<h3>{CompanyName}</h3>
					{Positions}
				</div>
			);
		})
		const SkillSection = this.props.data.skills.map(function(skills: {name: string, level: string}){
			const className = 'bar-expand '+skills.name.toLowerCase();
			return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
		})
		

		return (
			<section id="resume">
				<div className="Row work">
					<div className="three columns header-col">
						<h1><span>Work</span></h1>
					</div>
					<div className="nine columns main-col">
						Here are little summaries about my different roles, but you can learn specifics about my experiences on my resume, which can be downloaded <a href="https://drive.google.com/file/d/1PkXVVxvQqQTEn93CEDhG5i5_10y18mcL/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.
						<br /><br />
						{WorkSection}
					</div>
				</div>
				<div className="Row education">
					<div className="three columns header-col">
						<h1><span>Education</span></h1>
					</div>
					<div className="nine columns main-col">
						<div className="Row item">
							<div className="twelve columns">
								{EducationSection}
							</div>
						</div>
					</div>
				</div>
				<div className="Row skill">
					<div className="three columns header-col">
						<h1><span>Skills</span></h1>
					</div>
					<div className="nine columns main-col">
						<p>{SkillsMessage}</p>
						<div className="bars">
							<ul className="skills">
								{SkillSection}
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}