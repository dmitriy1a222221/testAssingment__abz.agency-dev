import React, { Component } from 'react';
import '../stylesheets/styleForComponent/SidePanelLeftStyle.sass';

class Copyright extends Component {
    render() {
        return (
            <div className="Copyright">
                <h2 className="Copyright-title common-copyright">
                    Denteez Copyright 2015
                </h2>
                <div className="wrap-conditions">
                    <a href="href-no-link">
                        <h2 className="terms common-copyright">Terms of use</h2>
                    </a>
                    <a href="href-no-link">
                        <h2 className="policy common-copyright">Privacy Policy</h2>
                    </a>
                </div>
            </div>
        );
    }
}

class CompanyItem extends Component {
    render() {
        return (
            <div className="CompanyItem">
                <img src={this.props.companyIcon} alt="companyIcon"/>
                <div className="about-company">
                    <h2 className="company-name">{this.props.companyName}</h2>
                    <h3 className="company-direction company-wrap-style">{this.props.companyDirection}</h3>
                    <h3 className="company-location company-wrap-style">{this.props.companyLocation}</h3>
                    <a href={this.props.followNowLink} className='company-link'>Follow Now</a>
                </div>
            </div>
        );
    }
}

class FeaturedCompanies extends Component {
    render() {
        return (
            <div className="FeaturedCompanies">
                <div className="head-block">
                    <h3 className="head-block__title">
                        Feature Companies
                    </h3>
                    <a href="href-no-link">
                        <h3 className="head-block__link-more">
                            See All
                        </h3>
                    </a>
                </div>
                <CompanyItem
                    companyIcon={require('../img/companyIcon-1.jpg')}
                    companyName={'Company Name'}
                    companyDirection={'Manufacturer'}
                    companyLocation={'Belgrade, Serbia'}
                    followNowLink={'href-no-link'}
                />
                <CompanyItem
                    companyIcon={require('../img/companyIcon-2.jpg')}
                    companyName={'Company Name'}
                    companyDirection={'Service Provider'}
                    companyLocation={'New York, USA'}
                    followNowLink={'href-no-link'}
                />
                <CompanyItem
                    companyIcon={require('../img/companyIcon-3.jpg')}
                    companyName={'Company Name'}
                    companyDirection={'Supplier'}
                    companyLocation={'London, England'}
                    followNowLink={'href-no-link'}
                />
            </div>
        );
    }
}

class Advertisement extends Component {
    render() {
        return (
            <div className="Advertisement">
                <h4 className='Advertisement-title'>Advertisement</h4>
                <img src={require('../img/AdvertisementIcon-1.jpg')} alt="Advertisement"/>
                <h6 className='Advertisement-subtitle'>Ads By Denteez.com</h6>
            </div>
        );
    }
}

class NavItem extends Component {
    render() {
        return (
            <div className="NavItem">
                <img src={this.props.navIcon} alt="nav-icon"/>
                <span>{this.props.navItemName}</span>
            </div>
        );
    }
}

class WrappNavItem extends Component {
    render() {
        return (
            <div className="WrappNavItem">
                <NavItem
                    navIcon={require('../img/navIcon-1.jpg')}
                    navItemName={'Feed'}
                />
                <NavItem
                    navIcon={require('../img/navIcon-2.jpg')}
                    navItemName={'Ask a Colleague'}
                />
                <NavItem
                    navIcon={require('../img/navIcon-3.jpg')}
                    navItemName={'Companies'}
                />
                <NavItem
                    navIcon={require('../img/navIcon-4.jpg')}
                    navItemName={'Service Directory'}
                />
            </div>
        );
    }
}

class SidePanelLeft extends Component {
    render() {
        return (
            <div className="SidePanelLeft">
                <WrappNavItem />
                <Advertisement />
                <FeaturedCompanies />
                <Copyright />
            </div>
        );
    }
}

export default SidePanelLeft;
