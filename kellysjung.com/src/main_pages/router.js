import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./app";
import Blog from "./blog";
import Projects from "./projects";

export default class Router extends React.Component {
	render() {
    	return (
			<BrowserRouter>
				<Switch>
					<Route path="https://www.kellysjung.com/blog" component={Blog} />
					<Route path="/projects" component={Projects} />
					<Route component={App} />
				</Switch>
			</BrowserRouter>
    	);
  	}
}