import React, { CSSProperties } from 'react';
import Collapsible from 'react-collapsible';

interface Props {
    ButtonClassName: string;
    TimeIn: number;
    TimeOut: number;
    Name: string;
    Style: CSSProperties;
};
interface ComponentState {};

export default class CustomCollapsible extends React.Component<Props, ComponentState>{
    static defaultProps = {
        ButtonClassName: '',
        TimeIn: 600,
        TimeOut: 400,
        Name: 'Click Here',
        Style: {}
    }

    render(): JSX.Element {
        let ButtonClassName = '';
        if (this.props.ButtonClassName) {
            ButtonClassName = this.props.ButtonClassName + ' CollapsibleButton';
        }
        
        return(
            <Collapsible transitionTime={this.props.TimeIn} transitionCloseTime={this.props.TimeOut} triggerClassName={ButtonClassName} triggerOpenedClassName={ButtonClassName} trigger={this.props.Name} style={this.props.Style}>
                {this.props.children}
            </Collapsible>
        );
    }
}