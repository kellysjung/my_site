import React from 'react';

interface Props {
	data: any
};
interface ComponentState {};

export default class Header extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const name = this.props.data.name;
		const occupation= this.props.data.occupation;
		const description= this.props.data.description;
		const city= this.props.data.address.city;
		const networks= this.props.data.social.map(function(network: any){
			return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
		});

		return (
			<header id="Home">
				<nav id="NavWrap">
					<a className="MobileButton" href="#NavWrap" title="Show navigation">Show navigation</a>
					<a className="MobileButton" href="#Home" title="Hide navigation">Hide navigation</a>
					<ul id="nav" className="nav">
						<li className="current"><a className="smoothscroll" href="#Home">Home</a></li>
						<li><a className="smoothscroll" href="#about">About</a></li>
						<li><a className="smoothscroll" href="#resume">Resume</a></li>
						<li><a className="smoothscroll" href="#contact">Contact</a></li>
						<li><a className="smoothscroll" href="#extra">For Fun!</a></li>
					</ul>
				</nav>
				<div className="row banner">
					<div className="banner-text">
						<h1 className="responsive-headline">I'm {name}.</h1>
						<h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
						<hr />
						<ul className="social">
						{networks}
						</ul>
					</div>
				</div>
				<p className="scrolldown">
					<a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
				</p>
			</header>
		);
	}
}