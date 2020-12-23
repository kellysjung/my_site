import React from 'react';
import _ from 'underscore';

interface Props {
    CurrentPage: string;
};
interface ComponentState {};

export default class SecondaryNavMenu extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        let CurrentPage = this.props.CurrentPage;
        const Pages = {
                        'Home': {'Link': '/', 'Name': 'Home'},
                        'About': {'Link': '/#about', 'Name': 'About'},
                        'Resume': {'Link': '/#resume', 'Name': 'Resume'},
                        'Contact': {'Link': '/#contact', 'Name': 'Contact'},
                        'MyStory': {'Link': '/#my-story', 'Name': 'My Story'},
                        'Blog': {'Link': '/blog', 'Name': 'Blog'},
                        // 'Projects': {'Link': '/projects', 'Name': 'Projects'}
                    };
        let MenuLinks: JSX.Element[] = [];

        _.each(Pages, function(Page) {
            if (CurrentPage === Page.Name) {
                MenuLinks.push(
                    <li key={Page.Name}><a style={{ color: '#f2c75a' }} href={Page.Link}>{Page.Name}</a></li>
                );
            } else {
                MenuLinks.push(
                    <li key={Page.Name}><a href={Page.Link}>{Page.Name}</a></li>
                );
            }
        }, CurrentPage);

        return (
            <nav id='SecondaryNavWrap' className='NavWrap opaque'>
                <a className="MobileButton" href="#SecondaryNavWrap" title="Show navigation">Show navigation</a>
                <a className="MobileButton" href="#Home" title="Hide navigation">Hide navigation</a>
                <ul className="nav">
                    {MenuLinks}
                </ul>
            </nav>
        );
    }
}