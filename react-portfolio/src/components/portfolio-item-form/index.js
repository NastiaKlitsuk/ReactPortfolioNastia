import React, { Component } from 'react';
import './PortfolioItemForm.css';
import PropTypes from 'prop-types';

class PortfolioItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            description: this.props.description,
            imageUrl: this.props.imageUrl
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={(event)=>{this.props.onSavedProtfolioItem(event,
                                                              this.props.id,
                                                              this.state.title, 
                                                              this.state.imageUrl, 
                                                              this.state.description)}}>
                <div className="FormContainer">
                <div className="FormHeader">Insert new protfolio details</div>

                <label htmlFor="title">Title:</label>
                <input id="title" name="title" type="text" value={this.state.title} onChange={this.onChange} />

                <label htmlFor="imageUrl">Image Url:</label>
                <input id="imageUrl" name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.onChange} />

                <label>Description:</label>
                <textarea  name="description" defaultValue={this.state.description} onChange={this.onChange} />
                 
                <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

PortfolioItemForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    onSavedProtfolioItem: PropTypes.func.isRequired
}

export default PortfolioItemForm;