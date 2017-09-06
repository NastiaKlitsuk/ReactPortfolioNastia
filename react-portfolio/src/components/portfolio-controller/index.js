import React, { Component } from 'react';
import './PortfolioController.css';
import PropTypes from 'prop-types';
import PortfolioItem from '../portfolio-item';

class PortfolioController extends Component {
    render() {
        return (
            <div className="PortfolioContainer">
                {
                    this.props.data.map((item, idx) => {
                        return <PortfolioItem key={idx} id={item.id} title={item.title} 
                                              description={item.description} imageUrl={item.imageUrl} 
                                              onEditPortfolioItem={this.props.onEditPortfolioItem.bind(this)}
                                              onRemovePortfolioItem={this.props.onRemovePortfolioItem.bind(this)}/>
                    })
                }
            </div>
        );
    }
}

export default PortfolioController;