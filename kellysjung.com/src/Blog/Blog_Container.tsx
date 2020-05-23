import React from 'react';
import { Dialog } from '../dialog';

interface Props {
    Post: {Key: number, Title: string, Date: string, Description: string, Image: string, Body: string};
};
interface ComponentState {};

export default class BlogContainer extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        const Post = this.props.Post;
        return (
            <div className='BlogPost'>
                <div onClick={() => Dialog.Open()}>
                    <div className='PostImage' ><img src={Post.Image} alt='BlogImage' /></div>
                    <div className='PostTitle' >{Post.Title}</div>
                </div>
                <div className='PostDescription'>{Post.Description}</div>
                <div className='PostDate'>{Post.Date}</div>
            </div>
        );
    }
}