import React, { Component } from 'react';
import './PortfolioItemDisplay.css';
import PropTypes from 'prop-types';

class PortfolioItemDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: true
        };

        this.onClose = this.onClose.bind(this);
    }

    onClose(event) {
        event.preventDefault();
        this.setState({ isDisplayed: false });
        this.props.onPortfolioItemDisplayClosed();
    }

    render() {
        if (!this.state.isDisplayed) {
            return null;
        }
        return (
            <div className="DisplayContainer">
                <h2 className="DispalyHeader">{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div >
                    <img src={this.props.imageUrl} alt="Sorry, the source is unavailable." />
                </div>
                <button type="button" onClick={(event) => { this.onClose(event) }}>Close</button>
            </div>
        );
    }
}

PortfolioItemDisplay.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
}

export default PortfolioItemDisplay;