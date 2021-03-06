import './App.css';
import _ from 'lodash';
import Consts from './consts.js';
import React, { Component } from 'react';
import Navigator from './components/navigator';
import ContentArea from './components/content-area';
import portfolioItems from './portfolio-items.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedMenuItemName: Consts.ProtfolioMenu,
      portfolioItemToEdit: {
        id: -1,
        title: '',
        description: '',
        imageUrl: ''
      },
      portfolioItems: portfolioItems.items
    }
    this.onMenuChanged = this.onMenuChanged.bind(this);
    this.onEditPortfolioItem = this.onEditPortfolioItem.bind(this);
    this.onRemovePortfolioItem = this.onRemovePortfolioItem.bind(this);
    this.onSavedProtfolioItem = this.onSavedProtfolioItem.bind(this);
    this.onDisplayPortfolioItem = this.onDisplayPortfolioItem.bind(this);
    this.onPortfolioItemDisplayClosed = this.onPortfolioItemDisplayClosed.bind(this);
  }

  onDisplayPortfolioItem(event, idx, itemTitle, itemImageUrl, itemDescription) {
    event.preventDefault();
    this.setState({
      displayedMenuItemName: Consts.DisplayProtfolioItem,
      portfolioItemToEdit:
      {
        id: idx,
        title: itemTitle,
        description: itemDescription,
        imageUrl: itemImageUrl
      }
    });
  }

  onPortfolioItemDisplayClosed() {
    this.setState({
      displayedMenuItemName: Consts.ProtfolioMenu,
      portfolioItemToEdit:
      {
        id: -1,
        title: '',
        description: '',
        imageUrl: ''
      }
    });
  }

  onMenuChanged(event, selectedMenuItemName) {
    event.preventDefault();
    this.setState({
      displayedMenuItemName: selectedMenuItemName,
      portfolioItemToEdit: {
        id: -1,
        title: '',
        description: '',
        imageUrl: ''
      }
    });
  }

  onEditPortfolioItem(event, idx, itemTitle, itemImageUrl, itemDescription) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      displayedMenuItemName: Consts.EditProtfolioItem,
      portfolioItemToEdit:
      {
        id: idx,
        title: itemTitle,
        description: itemDescription,
        imageUrl: itemImageUrl
      }
    });
  }

  onRemovePortfolioItem(event, idx) {
    event.preventDefault();
    event.stopPropagation();
    const positionItemToRemove = _.findIndex(this.state.portfolioItems, { id: idx });
    this.setState({
      portfolioItems: [...this.state.portfolioItems.slice(0, positionItemToRemove),
      ...this.state.portfolioItems.slice(positionItemToRemove + 1)]
    });
  }

  onSavedProtfolioItem(event, idx, itemTitle, itemImageUrl, itemDescription) {
    event.preventDefault();
    let newPortfolioItems = {};
    if (idx !== -1) {
      const positionItemToUpdate = _.findIndex(this.state.portfolioItems, { id: idx });
      const updatedItem = {
        ...this.state.portfolioItems[positionItemToUpdate],
        title: itemTitle,
        imageUrl: itemImageUrl,
        description: itemDescription
      };
      newPortfolioItems = [...this.state.portfolioItems.slice(0, positionItemToUpdate), updatedItem,
      ...this.state.portfolioItems.slice(positionItemToUpdate + 1)];
    }
    else {
      let newItemIndex = this.state.portfolioItems.count + 1;
      let newItem = {
        id: newItemIndex,
        title: itemTitle,
        description: itemDescription,
        imageUrl: itemImageUrl
      };
      newPortfolioItems = [...this.state.portfolioItems, newItem];
    }

    this.setState({
      displayedMenuItemName: Consts.ProtfolioMenu,
      portfolioItems: newPortfolioItems,
      portfolioItemToEdit: {
        id: -1,
        title: '',
        description: '',
        imageUrl: ''
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navigator onMenuChanged={this.onMenuChanged.bind(this)} />
        <ContentArea data={this.state.portfolioItems}
          displayedMenuItemName={this.state.displayedMenuItemName}
          onEditPortfolioItem={this.onEditPortfolioItem.bind(this)}
          onRemovePortfolioItem={this.onRemovePortfolioItem.bind(this)}
          onSavedProtfolioItem={this.onSavedProtfolioItem.bind(this)}
          onDisplayPortfolioItem={this.onDisplayPortfolioItem.bind(this)}
          onPortfolioItemDisplayClosed={this.onPortfolioItemDisplayClosed.bind(this)}
          id={this.state.portfolioItemToEdit.id}
          title={this.state.portfolioItemToEdit.title}
          imageUrl={this.state.portfolioItemToEdit.imageUrl}
          description={this.state.portfolioItemToEdit.description} />
      </div>
    );
  }
}

export default App;
