import React from 'react';
import PropTypes from 'prop-types';
import PortfolioController from '../portfolio-controller';
import PortfolioItemForm from '../portfolio-item-form';
import About from '../about';
import './ContentArea.css';
import PortfolioItemDisplay from '../portfolio-item-display';

const ContentArea = (props) => {
    let view = {};
    if (props.displayedMenuItemName === 'Portfolio') {
        view = <PortfolioController data={props.data}
            onEditPortfolioItem={props.onEditPortfolioItem}
            onRemovePortfolioItem={props.onRemovePortfolioItem}
            onDisplayPortfolioItem={props.onDisplayPortfolioItem} />;
    }
    else if ((props.displayedMenuItemName === 'Add new portfolio item') ||
        (props.displayedMenuItemName === 'Edit portfolio item')) {
        view = <PortfolioItemForm id={props.id}
            title={props.title}
            imageUrl={props.imageUrl}
            description={props.description}
            onSavedProtfolioItem={props.onSavedProtfolioItem} />;
    }
    else if (props.displayedMenuItemName === 'About') {
        view = <About />;
    }
    else if (props.displayedMenuItemName === 'Display Portfolio Item') {
        view = <PortfolioItemDisplay title={props.title}
            imageUrl={props.imageUrl}
            description={props.description} 
            onPortfolioItemDisplayClosed={props.onPortfolioItemDisplayClosed}/>;
    }

    return (
        <div className="ContentArea">
            {view}
        </div>
    );
}

ContentArea.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    onRemovePortfolioItem: PropTypes.func.isRequired,
    onEditPortfolioItem: PropTypes.func.isRequired,
    onDisplayPortfolioItem: PropTypes.func.isRequired,
    onSavedProtfolioItem: PropTypes.func.isRequired,
    onPortfolioItemDisplayClosed: PropTypes.func.isRequired
}

export default ContentArea;