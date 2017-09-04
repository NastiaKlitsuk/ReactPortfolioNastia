import React, { Component } from 'react';
import './PortfolioController.css';
import PropTypes from 'prop-types';
import PortfolioItem from '../portfolio-item';

class PortfolioController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {title: "Garda lake.", description: "Garda lake.", imageUrl: "images/gardalake.jpg"}
            ]
        }
    }

    render() {
        return (
            <div className="PortfolioContainer">
                {
                    this.state.items.map((item, idx) => {
                        return <PortfolioItem key={idx} title={item.title} description={item.description} imageUrl={item.imageUrl}/>
                    })
                }
            </div>
        );
    }
}

export default PortfolioController;