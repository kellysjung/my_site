import React from 'react';

interface Props {
	ShowOverlay: boolean
};
interface ComponentState {
	ShowOverlay: boolean
};

export default class Overlay extends React.Component<Props, ComponentState> {
	constructor(props: Props) {
		super(props);
		this.state = { ShowOverlay: true };
	}

	CloseDialog = () => {
		this.setState({ShowOverlay: false});
		window.history.pushState('', '', '/blog');
	}

	render(): JSX.Element | null {
		return this.state.ShowOverlay ? <div className='Overlay' onClick={() => this.CloseDialog()}>{this.props.children}</div> : null;
	}
}