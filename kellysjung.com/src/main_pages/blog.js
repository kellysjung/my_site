import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, useParams } from "react-router-dom";
import _ from 'underscore';
import SecondaryNavMenu from '../components/common/secondary_nav_menu';
import BlogData from '../data/blogData.json';
import data from '../data/resumeData.json';
import BlogContainer from '../components/common/blog_container';
import Footer from "../components/footer";

export default function Blog() {
	const FirstPost = BlogData[0];
	let BlogPosts = [];
	BlogData.shift();

	_.each(BlogData, function(Post) {
		BlogPosts.push(<BlogContainer Post={Post} key={Post.Key} />);
	});

	return (
		<div>
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
			<Footer data={data.main} ShowJumpToTop={false} />
		</div>
	);
}

function OpenedPost() {
	const { id } = useParams();

	return (
		<div>{id}</div>
	);
}