import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blog from "../pages/blog";
import App from "../pages/app";
import Projects from "../pages/projects";

export default class Router extends React.Component {
	render() {
    	return (
			<BrowserRouter>
				<Switch>
					<Route path="/projects" component={Projects} />
					<Route path='/blog' component={Blog} />
					<Route component={App} />
				</Switch>
			</BrowserRouter>
    	);
  	}
}