import React from 'react';

interface Props {};
interface ComponentState {};

export default class Overlay extends React.Component<Props, ComponentState> {
	
	render(): JSX.Element {
		return (
			<div className='Overlay' />			
		);
	}
}