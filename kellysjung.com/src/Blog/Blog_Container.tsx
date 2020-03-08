import React from 'react';

interface Props {
    // PostTitle: string,
    // PostImage: string,
    // PostDescription: string,
    // PostDate: string,
    // PostBody: string

    // TODO: type as post object
    Post: any
};
interface ComponentState {};

export default class BlogContainer extends React.Component<Props, ComponentState> {
    OpenPost = (key: number) => {
        this.setState({ ShowPost: true });
    }
    ClosePost = () => {
		this.setState({ ShowPost: false });
	}
    
    render(): JSX.Element {
        const Post = this.props.Post;

        return (
            <div className='BlogPost'>
                <div><img src={Post.Image} alt='BlogImage' /></div>
                <div className='PostTitle'>{Post.Title} 2</div>
                <div className='PostDescription'>{Post.Description}</div>
                <div className='PostDate'>{Post.Date}</div>
            </div>
        );
    }
}