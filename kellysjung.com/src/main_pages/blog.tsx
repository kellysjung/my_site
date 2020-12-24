import React from 'react';
import SecondaryNavMenu from '../components/common/secondary_nav_menu';

interface Props {};
interface ComponentState {};

export default class Blog extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        return (
            <section id="blog" className="SecondaryPage">
                <SecondaryNavMenu CurrentPage='Blog' />
                <div style={{ textAlign: 'center', height: 900 }}>
                    This page is a work in progress! I'll have some of my musings and reflections here.
                </div>
            </section>
        );
    }
}