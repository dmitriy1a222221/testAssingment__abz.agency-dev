import React, { Component } from 'react';
import '../stylesheets/styleForComponent/SidePanelRightStyle.sass';

class Advertisement extends Component {
    render() {
        return (
            <div className="Advertisement">
                <h4 className='Advertisement-title'>Advertisement</h4>
                <img src={require('../img/AdvertisementIcon-2.jpg')} alt="Advertisement"/>
                <h6 className='Advertisement-subtitle'>Ads By Denteez.com</h6>
            </div>
        );
    }
}

class ProductItem extends Component {
    render() {
        return (
            <div className="ProductItem">
                <h2 className="ProductName">{this.props.productName}</h2>
                <div className="wrap-infoBlock">
                    <img src={this.props.productAvatar} alt="avatar"/>
                    <div className="product-description">
                        <h3 className="product-Short common-style-product">{this.props.productShort}</h3>
                        <h3 className="product-Description common-style-product">{this.props.productDescription}</h3>
                        <h3 className="product-SubDescription common-style-product">{this.props.productSubDescription}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

class FeaturedProduct extends Component {
    render() {
        return (
            <div className="FeaturedProduct">
                <div className="wrapTopBlock">
                    <span className='FeaturedProduct__text commonStyle-text'>{this.props.FeaturedProduct}</span>
                    <a href="href-no-link" className='FeaturedProduct__link-more commonStyle-link'>See All</a>
                </div>
                <ProductItem
                    productName={'Product Name'}
                    productAvatar={require('../img/productIcon-1.jpg')}
                    productShort={'Product short'}
                    productDescription={'Description.'}
                    productSubDescription={' The quick brown  fox jumps over the lazy dog'}
                />
                <ProductItem
                    productName={'Product Name'}
                    productAvatar={require('../img/productIcon-2.jpg')}
                    productShort={'Product short'}
                    productDescription={'Description.'}
                    productSubDescription={' The quick brown  fox jumps over the lazy dog'}
                />
            </div>
        );
    }
}

class PeopleItem extends Component {
    render() {
        return (
            <div className="PeopleItem">
                <h2 className="PeopleName">{this.props.popleName}</h2>
                <div className="wrap-infoBlock">
                    <img src={this.props.peopleAvatar} alt="avatar"/>
                    <div className="people-description">
                        <h3 className="people-position common-style-people">{this.props.peoplePosition}</h3>
                        <h3 className="people-location common-style-people">{this.props.peopleLocation}</h3>
                        <a href={this.props.addFriendlink} className='people__add-friend'>Add Friend</a>
                    </div>
                </div>
            </div>
        );
    }
}

class PeopleMayNow extends Component {
    render() {
        return (
            <div className="PeopleMayNow">
                <div className="wrapTopBlock">
                    <span className='PeopleMayNow__text commonStyle-text'>{this.props.PeopleMayNow}</span>
                    <a href="href-no-link" className='PeopleMayNow__link-more commonStyle-link'>See All</a>
                </div>

                <PeopleItem
                    popleName={'Denis Adams'}
                    peopleAvatar={require('../img/peopleIcon-1.jpg')}
                    peoplePosition={'Dentist (Practice  Owner)'}
                    peopleLocation={'London, England'}
                    addFriendlink={'href-no-link'}
                />
                <PeopleItem
                    popleName={'Mary Carpenter'}
                    peopleAvatar={require('../img/peopleIcon-2.jpg')}
                    peoplePosition={'Dentist (Practice  Owner)'}
                    peopleLocation={'Belgrade, Serbia'}
                    addFriendlink={'href-no-link'}
                />
                <PeopleItem
                    popleName={'Danielle Salazar'}
                    peopleAvatar={require('../img/peopleIcon-3.jpg')}
                    peoplePosition={'Dentist (Practice  Owner)'}
                    peopleLocation={'Paris, France'}
                    addFriendlink={'href-no-link'}
                />
            </div>
        );
    }
}

class SidePanelRight extends Component {
    render() {
        return (
            <div className="SidePanelRight">
                <PeopleMayNow
                    PeopleMayNow={'People you may know'}
                />
                <FeaturedProduct
                    FeaturedProduct={'Featured Product'}
                />
                <Advertisement />
            </div>
        );
    }
}

export default SidePanelRight;
