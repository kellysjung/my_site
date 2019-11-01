import React from 'react';

interface Props {
	data: any
};
interface ComponentState {};

export default class About extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const Name = this.props.data.name;
		const ProPic= "i/"+this.props.data.image;
		const Bio = this.props.data.bio;
		const Email = this.props.data.email;
		const ResumeDownloadLink = this.props.data.resumedownload;

		return (
			<section id="about">
				<div className="Row">
					<div className="three columns">
						<img className="profile-pic"  src={ProPic} alt="Kelly Jung Profile Pic" />
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>

						<p>{Bio}</p>
						<div className="Row">
						<div className="columns contact-details">
						<br />
							<p className="address">
								<span>{Name}</span><br />
								<span>{Email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<a href={ResumeDownloadLink} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
							</p>
						</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}