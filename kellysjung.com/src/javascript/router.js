import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../main_pages/app";
import Blog from "../main_pages/blog";
import Projects from "../main_pages/projects";

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