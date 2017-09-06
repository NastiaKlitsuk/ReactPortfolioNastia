import React, { Component } from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                { title: "Portfolio", id: 1 },
                { title: "Add new portfolio item", id: 2 },
                { title: "About", id: 3 }
            ]
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.menuItems.map((item, idx) => {
                        return <MenuItem key={item.id} id={item.id} title={item.title} onMenuChanged={this.props.onMenuChanged.bind(this)} />
                    })
                }
            </div>
        );
    }
}

export default Menu;