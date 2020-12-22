import React from 'react';
import _ from 'underscore';
import SecondaryNavMenu from './components/common/secondary_nav_menu';
import BlogContainer from './blog/blog_bontainer';
import Data from './blogData.json';

interface Props {};
interface ComponentState {};

export default class Blog extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        const FirstPost = Data[0];
        let BlogPosts: JSX.Element[] = [];
        Data.shift();

        _.each(Data, function(Post) {
            BlogPosts.push(<BlogContainer Post={Post} />);
        });

        return (
            <section id="blog" className="SecondaryPage">
                <div className='BlogWrapper'>
                    <SecondaryNavMenu CurrentPage='Blog' />
                    <h1><span>WIP</span></h1>
                    <div className='First_BlogPost'>
                        <div><img src={FirstPost.Image} alt='BlogImage' /></div>
                        <div className='PostTitle'>{FirstPost.Title}</div>
                        <div className='PostDescription'>{FirstPost.Description}</div>
                        <div className='PostDate'>{FirstPost.Date}</div>
                    </div>
                    <div className='BlogPostsWrapper'>
                        {BlogPosts}
                    </div>
                </div>
            </section>
        );
    }
}