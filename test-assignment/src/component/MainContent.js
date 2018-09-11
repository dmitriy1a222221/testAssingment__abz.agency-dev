import React, { Component } from 'react';
import SidePanelLeft from './SidePanelLeft';
import MiddlePanel from './MiddlePanel';
import SidePanelRight from './SidePanelRight';

import '../stylesheets/styleForComponent/MainContentStyle.sass'

class MainContent extends Component {
    render() {
        return (
            <div className="MainContent">
                <div className="MainContent-contain">
                    <SidePanelLeft />
                    <MiddlePanel />
                    <SidePanelRight />
                </div>
            </div>
        );
    }
}

export default MainContent;
