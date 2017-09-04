import React, { Component } from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                { title: "Portfolio"},
                { title: "Add new portfolio item"},
                { title: "About"}
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.menuItems.map((item, idx) => {
                        return <MenuItem key={idx} title={item.title} />
                    })
                }
            </div>
        );
    }
}

export default Menu;