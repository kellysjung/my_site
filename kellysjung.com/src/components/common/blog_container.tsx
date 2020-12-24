import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../javascript/types';

interface Props {
    Post: BlogPost;
};
interface ComponentState {};

export default class BlogContainer extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        const Post = this.props.Post;

        return (
            <div className='BlogPost'>
				<Link to={"/blog/"+Post.Key}>
                    <div className='PostImage' ><img src={Post.Image} alt='BlogImage' /></div>
                    <div className='PostTitle' >{Post.Title}</div>
				</Link>
                <div className='PostDescription'>{Post.Description}</div>
                <div className='PostDate'>{Post.Date}</div>
            </div>
        );
    }
}