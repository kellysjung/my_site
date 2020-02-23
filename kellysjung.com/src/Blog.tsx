import React from 'react';

interface Props {};
interface ComponentState {};

export default class Blog extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        return (
            <section id="blog">
                <div style={{ textAlign: 'center' }}>
                    This page is a work in progress! I'll have some of my musings and reflections here.
                </div>
            </section>
        );
    }
}