import React from 'react';

interface Props {
	data: any
};
interface ComponentState {};

export default class Footer extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const networks= this.props.data.Social.map(function(network: any){
			return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
		})
		
		return (
			<footer>
				<div className="Row">
					<div className="twelve columns">
					<ul className="Social-links">
						{networks}
					</ul>
					</div>
					<div id="go-top"><a className="SmoothScroll" title="Back to Top" href="#Home"><i className="icon-up-open"></i></a></div>
				</div>
			</footer>
		);
	}
}