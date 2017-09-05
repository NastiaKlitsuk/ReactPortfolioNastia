import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioController from '../portfolio-controller';
import PortfolioItemForm from '../portfolio-item-form';
import './ContentArea.css';

class ContentArea extends Component {
    render() {
        //alert('in ContentArea render');
        alert(this.props.displayedMenuItemName);

        let view = (this.props.displayedMenuItemName === 'Portfolio') ? <PortfolioController /> : <PortfolioItemForm />;

        return (
            <div className="ContentArea">
                {view}
            </div>
        );
    }
}

export default ContentArea;

ContentArea.propTypes = {
    displayedMenuItemName: PropTypes.string.isRequired
}