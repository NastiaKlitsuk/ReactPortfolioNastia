import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioController from '../portfolio-controller';
import PortfolioItemForm from '../portfolio-item-form';
import About from '../about';
import './ContentArea.css';

class ContentArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let view = {};
        if (this.props.displayedMenuItemName === 'Portfolio') {
            view = <PortfolioController data={this.props.data}
                onEditPortfolioItem={this.props.onEditPortfolioItem.bind(this)}
                onRemovePortfolioItem={this.props.onRemovePortfolioItem.bind(this)} />;
        }
        else if (this.props.displayedMenuItemName === 'Add new portfolio item') {
            view = <PortfolioItemForm title='' imageUrl='' description='' />;
        }
        else if (this.props.displayedMenuItemName === 'Edit portfolio item') {
            view = <PortfolioItemForm id={this.props.id}
                title={this.props.title}
                imageUrl={this.props.imageUrl}
                description={this.props.description}
                onChangedProtfolioItem={this.props.onChangedProtfolioItem.bind(this)} />;
        }
        else if (this.props.displayedMenuItemName === 'About') {
            view = <About />;
        }

        return (
            <div className="ContentArea">
                {view}
            </div>
        );
    }
}

export default ContentArea;