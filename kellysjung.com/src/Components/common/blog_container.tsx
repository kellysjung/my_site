import React from 'react';
import { BlogPost } from '../../javascript/types';
import { Dialog } from '../../javascript/dialog';

interface Props {
    Post: BlogPost;
};
interface ComponentState {};

export default class BlogContainer extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        const Post = this.props.Post;

        return (
            <div className='BlogPost'>
                <a href='javascript://' onClick={() => Dialog.Open(Post)} className='BlogClickable'>
                    <div className='PostImage' ><img src={Post.Image} alt='BlogImage' /></div>
                    <div className='PostTitle' >{Post.Title}</div>
                </a>
                <div className='PostDescription'>{Post.Description}</div>
                <div className='PostDate'>{Post.Date}</div>
            </div>
        );
    }
}