import React from 'react';

interface Props {
	Data: any
};
interface ComponentState {};

export default class About extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const name = this.props.Data.name;
		const profilepic= "i/"+this.props.Data.image;
		const bio = this.props.Data.bio;
		const phone= this.props.Data.phone;
		const email = this.props.Data.email;
		const resumeDownload = this.props.Data.resumedownload;

		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic"  src={profilepic} alt="Kelly Jung Profile Pic" />
					</div>
					<div className="nine columns main-col">
						<h2>About Me</h2>

						<p>{bio}</p>
						<div className="row">
						<div className="columns contact-details">
							<h2>Contact Details</h2>
							<p className="address">
								<span>{name}</span><br />
								<span>{phone}</span><br />
								<span>{email}</span>
							</p>
						</div>
						<div className="columns download">
							<p>
								<a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
							</p>
						</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}