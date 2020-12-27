import React from 'react';

interface Props {
	BlogPost: any
};
interface ComponentState {
	ShowOverlay: boolean
};

export default class OpenedPost extends React.Component<Props, ComponentState> {
	constructor(props: Props) {
		super(props);
		this.state = { ShowOverlay: true };
	}

	CloseDialog = () => {
		this.setState({ShowOverlay: false});
		window.history.pushState('', '', '/blog');
	}

	render(): JSX.Element | null {
		const BlogPost = this.props.BlogPost;
		return this.state.ShowOverlay ?
			<div className='Overlay'>
				<div className='OpenedPost'>
					<span className='OpenedPost_Close' title='Close this post' onClick={() => this.CloseDialog()}>X</span>
					<div className='OpenedPost_Scroll'>
						<div className='OpenedPost_Title'>{BlogPost.Title}</div>
						<div className='OpenedPost_Description'>{BlogPost.Description}</div>
						<div className='OpenedPost_Date'>{BlogPost.Date}</div>
						<div className='OpenedPost_Body'>{BlogPost.Body}</div>
					</div>
				</div>
			</div>
		: null;
	}
}