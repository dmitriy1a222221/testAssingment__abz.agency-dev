import React, { Component } from 'react';
import '../stylesheets/styleForComponent/HeaderStyle.sass';

class UserIdent extends Component {
    render() {
        return (
            <div className="UserIdent">
                <img src={this.props.userAvatar} alt="avatarUser" className="user-avatar"/>
                <span className='user-name'>{this.props.userName}</span>
            </div>
        );
    }
}

class Notification extends Component {
    render() {
        return (
            <div className="Notification">
                <img src={require('../img/notifications.png')} alt="notificationIcon"/>
            </div>
        );
    }
}

class Chat extends Component {
    render() {
        return (
            <div className="Chat">
                <img src={require('../img/chat.png')} alt="chatIcon"/>
            </div>
        );
    }
}

class NotificationBlok extends Component {
    render() {
        return (
            <div className="NotificationBlok">
                <Chat />
                <Notification />
            </div>
        );
    }
}

class SearchBlock extends Component {
    render() {
        return (
            <div className="SearchBlock">
                <a href="href-no-link">
                    <img src={require('../img/searchIcon.png')} alt="searchIcon"/>
                </a>
                <input className='search-input' type="text" placeholder="Company Name"/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-contain">
                    <img src={require('../img/logo.svg')} alt="logo"/>
                    <SearchBlock />
                    <NotificationBlok />
                    <UserIdent
                        userAvatar={require('../img/avatarActivePerson.png')}
                        userName={'Maximilian Beekeeper'}
                    />
                </div>
            </div>
        );
    }
}

export default Header;
