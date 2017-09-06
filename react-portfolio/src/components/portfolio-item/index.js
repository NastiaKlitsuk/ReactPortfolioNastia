import React from 'react';
import './PortfolioItem.css';
import PropTypes from 'prop-types';

const PortfolioItem = (props) => {
    return (
        <div className="PortfolioItemContainer"
            onClick={(event) => { props.onDisplayPortfolioItem(event, props.id, props.title, props.imageUrl, props.description) }} >
            <div className="PortfolioImage">
                <img src={props.imageUrl} alt="Sorry, the source is unavailable." />
            </div>
            <div className="Seperator" />
            <h3>{props.title}</h3>
            <button className="Remove" onClick={(event) => { props.onRemovePortfolioItem(event, props.id) }} />
            <button className="Edit" onClick={(event) => {
                props.onEditPortfolioItem(event, props.id,
                    props.title,
                    props.imageUrl,
                    props.description)
            }} />
        </div>
    );
}

PortfolioItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    onRemovePortfolioItem: PropTypes.func.isRequired,
    onEditPortfolioItem: PropTypes.func.isRequired,
    onDisplayPortfolioItem: PropTypes.func.isRequired
}

export default PortfolioItem;