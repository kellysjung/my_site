import React from 'react';
import _ from 'underscore';
import BlogContainer from '../blog/blog_container';
import Data from '../data/blogData.json';
import SecondaryNavMenu from '../components/common/secondary_nav_menu';
import { Dialog } from '../javascript/dialog';
import Overlay from '../components/common/overlay';

interface Props {};
interface ComponentState {};

export default class Blog extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        const FirstPost = Data[0];
        let BlogPosts: JSX.Element[] = [];
        Data.shift();

        _.each(Data, function(Post) {
            BlogPosts.push(<BlogContainer Post={Post} key={"BlogPost_"+Post.Key}/>);
        });

        return (
            <section id="blog" className="SecondaryPage">
                <Overlay />
                <div className='BlogWrapper'>
                    <SecondaryNavMenu CurrentPage='Blog' />
                    <h1><span>Under Construction</span></h1>
                    <div className='First_BlogPost'>
                        <a href='javascript://' onClick={() => Dialog.Open(FirstPost)} className='BlogClickable'>
                            <div><img src={FirstPost.Image} alt='BlogImage' /></div>
                            <div className='PostTitle'>{FirstPost.Title}</div>
                        </a>
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