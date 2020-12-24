import React from 'react';

interface Props {
	data: any
};
interface ComponentState {};

export default class Header extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
		const Name = this.props.data.name;
		const Occupation= this.props.data.occupation;
		const Description= this.props.data.description;
		// const City= this.props.data.address.city;
		const Networks= this.props.data.Social.map(function(network: any){
			return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
		});

		return (
			<header id="Home">
				<nav id='PrimaryNavWarp' className="NavWrap">
					<a className="MobileButton" href="#PrimaryNavWarp" title="Show navigation">Show navigation</a>
					<a className="MobileButton" href="#Home" title="Hide navigation">Hide navigation</a>
					<ul id="nav" className="nav">
						<span style={{display:'none'}}>
						<li><a href="/blog">Blog</a></li>
						<li><a href="/projects">Projects</a></li>
						</span>
						<li className="current"><a className="SmoothScroll" href="#Home">Home</a></li>
						<li><a className="SmoothScroll" href="#about">About</a></li>
						<li><a className="SmoothScroll" href="#resume">Resume</a></li>
						<li><a className="SmoothScroll" href="#contact">Contact</a></li>
						<li><a className="SmoothScroll" href="#my-story">My Story</a></li>
					</ul>
				</nav>
				<div className="Row Banner">
					<div className="BannerText">
						<h1 className="Headline">Hey, I'm {Name}!</h1>
						<div className="ProfileTitle">
							<p>And I'm a <span>{Occupation}</span>.</p>
							<p className="ProfileDescription">{Description}</p>
						</div>
						<br />
						<ul className="Social">
						{Networks}
						</ul>
					</div>
				</div>
				<p className="ScrollDown">
					<a className="SmoothScroll" href="#about"><i className="icon-down-circle"></i></a>
				</p>
			</header>
		);
	}
}