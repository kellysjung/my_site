import React from 'react';

interface Props {
	data: any;
};
interface ComponentState {};

export default class Contact extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const name = this.props.data.name;
		const city = this.props.data.address.city;
		const state = this.props.data.address.state;
		const phone = this.props.data.phone;
		const email = this.props.data.email;
		const message = this.props.data.contactmessage;

		return (
			<section id="contact">
				<div className="row section-head">
					<div className="two columns header-col">
						<h1>Get in touch!</h1>
					</div>
					<div className="ten columns">
						<p className="lead">{message}</p>
					</div>
				</div>
				<div className="row">
					<div className="eight columns">
						<form action="" method="post" id="contactForm" name="contactForm">
							<fieldset>
								<div>
									<label htmlFor="contactName">Name <span className="required">*</span></label>
									<input type="text" defaultValue="" size={35} id="contactName" name="contactName" />
								</div>
								<div>
									<label htmlFor="contactEmail">Email <span className="required">*</span></label>
									<input type="text" defaultValue="" size={35} id="contactEmail" name="contactEmail" />
								</div>
								<div>
									<label htmlFor="contactSubject">Subject</label>
									<input type="text" defaultValue="" size={35} id="contactSubject" name="contactSubject" />
								</div>
								<div>
									<label htmlFor="contactMessage">Message <span className="required">*</span></label>
									<textarea cols={50} rows={15} id="contactMessage" name="contactMessage"></textarea>
								</div>
								<div>
									<button className="submit">Submit</button>
									<span id="image-loader">
										<img alt="" src="i/loader.gif" />
									</span>
								</div>
							</fieldset>
						</form>

						<div id="message-warning">Error</div>
						<div id="message-success">
							<i className="fa fa-check"></i>Your message was sent, thank you!<br />
						</div>
					</div>
					<aside className="four columns footer-widgets">
						<div className="widget widget_contact">
							<h4>Contact</h4>
							<p className="address">
								{name}<br />
								{city}, {state}<br />
								<span>{email}</span>
								<span>{phone}</span>
							</p>
						</div>
					</aside>
				</div>
			</section>
		);
	}
}