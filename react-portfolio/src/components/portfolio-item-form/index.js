import React, { Component } from 'react';
import './PortfolioItemForm.css';
import PropTypes from 'prop-types';

class PortfolioItemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            imageUrl: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    onSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="FormContainer">
                <div className="FormStyleHeading">Insert new protfolio details</div>

                <label htmlFor="title">Title:</label>
                <input id="title" name="title" type="text" value={this.props.title} onChange={this.onChange} />

                <label htmlFor="imageUrl">Image Url:</label>
                <input id="imageUrl" name="imageUrl" type="text" value={this.props.imageUrl} onChange={this.onChange} />

                <label>Description:</label>
                <textarea  name="description" defaultValue={this.props.description} onChange={this.onChange} />
                 
                <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

PortfolioItemForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string.isRequired
}

export default PortfolioItemForm;