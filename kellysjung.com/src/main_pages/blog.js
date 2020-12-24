import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, useParams } from "react-router-dom";
import _ from 'underscore';
import SecondaryNavMenu from '../components/common/secondary_nav_menu';
import Data from '../data/blogData.json';
import BlogContainer from '../components/common/blog_container';

export default function Blog() {
	const FirstPost = Data[0];
	let BlogPosts = [];
	Data.shift();

	_.each(Data, function(Post) {
		BlogPosts.push(<BlogContainer Post={Post} key={Post.Key} />);
	});

	return (
		<section id="blog" className="SecondaryPage">
			<div className='BlogWrapper'>
				<SecondaryNavMenu CurrentPage='Blog' />
				<h1><span>Under Construction</span></h1>
				<Router>
					<div className='First_BlogPost'>
						<Link to={"/blog/"+FirstPost.Key}>
							<div><img src={FirstPost.Image} alt='BlogImage' /></div>
							<div className='PostTitle'>{FirstPost.Title}</div>
						</Link>
						<div className='PostDescription'>{FirstPost.Description}</div>
						<div className='PostDate'>{FirstPost.Date}</div>
					</div>
					<div className='BlogPostsWrapper'>
						{BlogPosts}
                    </div>
					<Switch>
						<Route path="/blog/:id" children={<OpenedPost />} />
					</Switch>
				</Router>
			</div>
		</section>
	);
}

function OpenedPost() {
	const { id } = useParams();

	return (
		<div>{id}</div>
	);
}