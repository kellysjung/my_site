import React from 'react';
import SecondaryNavMenu from './components/common/secondary_nav_menu';
import Data from './blogData.json';

interface Props {};
interface ComponentState {};

export default class Blog extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        const FirstPost = Data.Post;

   
        return (
            <section id="blog" className="SecondaryPage">
                <SecondaryNavMenu CurrentPage='Blog' />
                {/* <div style={{ textAlign: 'center', height: 900 }}>
                    This page is a work in progress! I'll have some of my musings and reflections here.
                </div> */}
                <h1><span>WIP</span></h1>
                <div className='BlogPostsWrapper'>
                    <div className='BlogPost'>
                        <div className='PostImage'><img src={FirstPost.Image} /></div>
                        <div className='PostTitle'>{FirstPost.Title}</div>
                        <div className='PostDescription'>{FirstPost.Description}</div>
                        <div className='PostDate'>{FirstPost.Date}</div>
                    </div>
                </div>
            </section>
        );
    }
}