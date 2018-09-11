import React, { Component } from 'react';
import '../stylesheets/styleForComponent/MiddlePanelStyle.sass';

class ServiceItem extends Component {
    render() {
        return (
            <div className="ServiceItem">
                <div className="serviceWrapImg">
                    <img src={this.props.srviceItemIcon} alt="serviceIcon"/>
                </div>
                <h5 className="seviceItem-name">{this.props.serviceItemName}</h5>
            </div>
        );
    }
}

class WrapServiceItem extends Component {
    render() {
        return (
            <div className="WrapServiceItem">
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-1.png')}
                    serviceItemName={'Accontancy'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-2.png')}
                    serviceItemName={'Associations'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-3.png')}
                    serviceItemName={'Buy/Sell Dental Practice'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-4.png')}
                    serviceItemName={'Clinical Waste Collection'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-5.png')}
                    serviceItemName={'Computer Service'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-6.png')}
                    serviceItemName={'CPR/Basic Life Support Training'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-7.png')}
                    serviceItemName={'Dental Recruitment'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-8.png')}
                    serviceItemName={'Dental Software'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-9.png')}
                    serviceItemName={'Electrical Safety And Testing'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-10.png')}
                    serviceItemName={'Marketing'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-11.png')}
                    serviceItemName={'Others'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-12.png')}
                    serviceItemName={'Repairs'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-13.png')}
                    serviceItemName={'Solicitors'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-14.png')}
                    serviceItemName={'Surgery Design'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-15.png')}
                    serviceItemName={'Training & Courses'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-16.png')}
                    serviceItemName={'Web Designers'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-17.png')}
                    serviceItemName={'Cleaning Agencies'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-18.png')}
                    serviceItemName={'Dental  Chair Recovery'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-19.png')}
                    serviceItemName={'Equipment Engineering'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-20.png')}
                    serviceItemName={'Selling Gold'}
                />
                <ServiceItem
                    srviceItemIcon={require('../img/serviceItemIcon-21.png')}
                    serviceItemName={'Uniform & Workwear'}
                />
            </div>
        );
    }
}

class ServiceAdd extends Component {
    render() {
        return (
            <div className="ServiceAdd">
                <h2 className="service-title">Service Directory</h2>
                <button className='service-btn'>Add New Service</button>
            </div>
        );
    }
}

class MiddlePanel extends Component {
    render() {
        return (
            <div className="MiddlePanel">
                <ServiceAdd />
                <WrapServiceItem />
            </div>
        );
    }
}

export default MiddlePanel;
