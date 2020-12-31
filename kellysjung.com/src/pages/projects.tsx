import React from 'react';
import SecondaryNavMenu from '../components/common/secondary_nav_menu';
import Footer from '../components/footer';
import data from '../data/resumeData.json';

interface Props {};
interface ComponentState {};

export default class Projects extends React.Component<Props, ComponentState> {
    render(): JSX.Element {
        return (
            <div>
                <section id="projects" className="SecondaryPage">
                    <SecondaryNavMenu CurrentPage='Projects' />
                    <h1><span>Under Construction</span></h1>
                    <div style={{ textAlign: 'center', height: 900 }}>
                        This page is a work in progress!
                    </div>
                </section>
            <Footer data={data.main} ShowJumpToTop={false} />
            </div>
        );
    }
}