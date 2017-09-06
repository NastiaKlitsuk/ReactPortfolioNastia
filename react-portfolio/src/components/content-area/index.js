import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioController from '../portfolio-controller';
import PortfolioItemForm from '../portfolio-item-form';
import About from '../about';
import './ContentArea.css';

class ContentArea extends Component {
    render() {
        //alert('in ContentArea render');
        //alert(this.props.displayedMenuItemName);

        let view = {};//(this.props.displayedMenuItemName === 'Portfolio') ? <PortfolioController /> : <PortfolioItemForm />;
        if (this.props.displayedMenuItemName === 'Portfolio'){
            view = <PortfolioController onEditPortfolioItem={this.props.onEditPortfolioItem.bind(this)}/>;
        }
        else if (this.props.displayedMenuItemName === 'Add new portfolio item'){
            view = <PortfolioItemForm title='' imageUrl='' description=''/>;                        
        }
        else if (this.props.displayedMenuItemName === 'Edit portfolio item'){
            view = <PortfolioItemForm title={this.props.title} imageUrl={this.props.imageUrl} description={this.props.description}/>;            
        }
        else if (this.props.displayedMenuItemName === 'About'){
            view = <About/>;
        }

        return (
            <div className="ContentArea">
                {view}
            </div>
        );
    }
}

export default ContentArea;

ContentArea.propTypes = {
    displayedMenuItemName: PropTypes.string.isRequired,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    onEditPortfolioItem: PropTypes.func.isRequired
}