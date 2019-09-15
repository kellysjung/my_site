import React from 'react';

interface Props {};
interface ComponentState {};

export default class Extra extends React.Component<Props, ComponentState> {
	render(): JSX.Element {
        return(
            <section id="extra" style={{height:500, backgroundColor:'white'}}>
                hello
            </section>
        );
    }
}