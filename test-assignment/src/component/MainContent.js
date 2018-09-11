import React, { Component } from 'react';
import SidePanelLeft from './SidePanelLeft';

import '../stylesheets/styleForComponent/MainContentStyle.sass'

class MainContent extends Component {
    render() {
        return (
            <div className="MainContent">
                <div className="MainContent-contain">
                    <SidePanelLeft />
                </div>
            </div>
        );
    }
}

export default MainContent;
