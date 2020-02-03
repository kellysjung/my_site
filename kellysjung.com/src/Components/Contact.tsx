import React from 'react';

interface Props {
	data: any;
};
interface ComponentState {};

export default class Contact extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const email = this.props.data.email;
		const ResumeDownloadLink = this.props.data.resumedownload;

		return (
			<section id="contact">
				<div className="Row section-head">
					<div className="two columns header-col" style={{ textAlign: 'center' }}>
						<a href="mailto:kellyjungg@gmail.com" target="_blank" rel="noopener noreferrer">
							<span className="EmailIcon">
								<i className="fa fa-envelope"></i>
								<h1>Get in touch!</h1>
							</span>
						</a>
					</div>
					<div className="ten columns ContactWrapper">
						<p className="lead">
							The easiest way to reach me is by emailing <a href={"mailto:"+email} target="_blank" rel="noopener noreferrer">{email}</a>, but feel free to reach out on the other platforms listed.
							<br />
							<span style={{ textAlign: 'right' }}>I look forward to connecting with you!</span>
						</p>
						<p className="ContactResume">
							<a href={ResumeDownloadLink} className="button" style={{ color: '#fff', width: 208 }} target="_blank" rel="noopener noreferrer"><i className="fa fa-download" style={{ marginRight: 14 }}></i>Download Resume</a>
						</p>
					</div>
				</div>
			</section>
		);
	}
}