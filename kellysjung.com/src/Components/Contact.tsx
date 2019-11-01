import React from 'react';

interface Props {
	data: any;
};
interface ComponentState {};

export default class Contact extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const email = this.props.data.email;

		return (
			<section id="contact">
				<div className="Row section-head">
					<div className="two columns header-col" style={{ textAlign: 'center' }}>
						<a href="mailto:kellyjungg@gmail.com">

							<span className="EmailIcon">
								<i className="fa fa-envelope"></i>
								<h1>Get in touch!</h1>
							</span>
						</a>
					</div>
					<div className="ten columns">
						<p className="lead">
							The easiest way to reach me is by emailing kellyjung96@gmail.com, but feel free to reach out on the other platforms listed.
							<br />
							<span style={{ textAlign: 'right' }}>I look forward to connecting with you!</span>
						</p>
					</div>
				</div>
			</section>
		);
	}
}