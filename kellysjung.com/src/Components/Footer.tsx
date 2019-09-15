import React from 'react';

interface Props {
	Data: any
};
interface ComponentState {};

export default class Footer extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const networks= this.props.Data.social.map(function(network: any){
			return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
		})
		
		return (
			<footer>
				<div className="row">
					<div className="twelve columns">
					<ul className="social-links">
						{networks}
					</ul>

					<ul className="copyright">
						<li>&copy; Copyright 2017 Tim Baker</li>
						<li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
					</ul>

					</div>
					<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
				</div>
			</footer>
		);
	}
}