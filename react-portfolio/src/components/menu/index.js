import React, { Component } from 'react';
import './Menu.css';
import Consts from '../../consts.js';
import MenuItem from '../menu-item';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                { title: Consts.ProtfolioMenu, id: 1 },
                { title: Consts.AddNewProtfolioItemMenu, id: 2 },
                { title: Consts.AboutMenu, id: 3 }
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