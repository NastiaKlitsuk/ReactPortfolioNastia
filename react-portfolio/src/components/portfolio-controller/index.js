import React, { Component } from 'react';
import './PortfolioController.css';
import PropTypes from 'prop-types';
import PortfolioItem from '../portfolio-item';

const PortfolioController = (props) => {
        return (
            <div className="PortfolioContainer">
                {
                    props.data.map((item, idx) => {
                        return <PortfolioItem key={idx} id={item.id} title={item.title} 
                                              description={item.description} imageUrl={item.imageUrl} 
                                              onEditPortfolioItem={props.onEditPortfolioItem}
                                              onRemovePortfolioItem={props.onRemovePortfolioItem}
                                              onDisplayPortfolioItem={props.onDisplayPortfolioItem}/>
                    })
                }
            </div>
        );
    }

PortfolioController.propTypes = {
    data: PropTypes.array.isRequired,
    onEditPortfolioItem: PropTypes.func.isRequired,
    onRemovePortfolioItem: PropTypes.func.isRequired,
    onDisplayPortfolioItem: PropTypes.func.isRequired
}

export default PortfolioController;