import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Blog from "../Blog";
import Projects from "../Projects";

export default class Router extends React.Component {
	render() {
    	return (
			<BrowserRouter>
				<Switch>
					<Route path="/blog" component={Blog} />
					<Route path="/projects" component={Projects} />
					<Route component={App} />
				</Switch>
			</BrowserRouter>
    	);
  	}
}