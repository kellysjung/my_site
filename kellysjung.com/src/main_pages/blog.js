import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, useParams } from "react-router-dom";
import _ from 'underscore';
import BlogContainer from "../components/common/blog_container";
import OpenedPost from "../components/common/opened_post";
import SecondaryNavMenu from '../components/common/secondary_nav_menu';
import Footer from "../components/footer";
import BlogData from '../data/blogData.json';
import data from '../data/resumeData.json';

export default function Blog() {
	let FeaturedPost;
	let BlogPosts = [];
	
	_.each(BlogData, function(Post) {
		if (Post.IsFeatured) {
			FeaturedPost = Post;
		} else {
			BlogPosts.push(<BlogContainer Post={Post} key={Post.Key} />);
		}
	});

	return (
		<div>
			<section id="blog" className="SecondaryPage">
				<div className='BlogWrapper'>
					<SecondaryNavMenu CurrentPage='Blog' />
					<h1><span>Under Construction</span></h1>
					<Router>
					{FeaturedPost ?
						<div className='Featured_BlogPost'>
							<Link to={"/blog/"+FeaturedPost.Key}>
								<div><img src={FeaturedPost.Image} alt='BlogImage' /></div>
								<div className='PostTitle'>{FeaturedPost.Title}</div>
							</Link>
							<div className='PostDescription'>{FeaturedPost.Description}</div>
							<div className='PostDate'>{FeaturedPost.Date}</div>
						</div>
					: ""}
						<div className='BlogPostsWrapper'>
							{BlogPosts}
						</div>
						<Switch>
							<Route path="/blog/:id" children={<OpenPost />} />
						</Switch>
					</Router>
				</div>
			</section>
			<Footer data={data.main} ShowJumpToTop={false} />
		</div>
	);
}

function OpenPost() {
	const { id } = useParams();
	const BlogPost = BlogData[id];
	
	return (
		<OpenedPost key={id} BlogPost={BlogPost} />
	);
}