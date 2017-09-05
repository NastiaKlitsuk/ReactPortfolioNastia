import React, { Component } from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [
                { title: "Portfolio", displayed: true, id: 1 },
                { title: "Add new portfolio item", displayed: false, id: 2 },
                { title: "About", displayed: false, id: 3 }
            ]
        }
    }

    onMenuSelected(selectedMenuId) {
        //alert(`onMenuSelected. length ${this.state.menuItems.length}`);
        this.setState({ menuItems: [] });
        let newState = [];
        for (let menuIndex = 0; menuIndex < this.state.menuItems.length; menuIndex++) {
            // let menuItem = Object.assign({}, this.state.menuItems[menuIndex]);
            // if (menuIndex === selectedMenuId) {
            //     menuItem.displayed = true;
            // }
            // else{
            //     menuItem.displayed = false;                
            // }

            const updatedMenuItem = (this.state.menuItems[menuIndex].id === selectedMenuId) ? 
                                            {...this.state.menuItems[menuIndex], displayed: true}:
                                            {...this.state.menuItems[menuIndex], displayed: false};

            newState.push(updatedMenuItem);
            //alert(newState.length);
        }

        this.props.onMenuChanged(this.state.menuItems[selectedMenuId-1].title);
        alert(`onMenuChanged to App: ${this.state.menuItems[selectedMenuId-1].title}`);
        this.setState({ menuItems: newState });
    }

    render() {
        //alert('in menu render');

        return (
            <div>
                {
                    this.state.menuItems.map((item, idx) => {
                        return <MenuItem key={item.id} id={item.id} title={item.title} onSelected={this.onMenuSelected.bind(this)} />
                    })
                }
            </div>
        );
    }
}

Menu.propTypes = {
    onMenuChanged: PropTypes.func.isRequired
}

export default Menu;