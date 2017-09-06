import React, { Component } from 'react';
import Navigator from './components/navigator';
import ContentArea from './components/content-area';
import './App.css';
import portfolioItems from './portfolio-items.json';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedMenuItemName: 'Portfolio',
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
      },
    });
  }

  onEditPortfolioItem(event, idx, itemTitle, itemImageUrl, itemDescription) {
    event.preventDefault();
    this.setState({
      displayedMenuItemName: 'Edit portfolio item',
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
      displayedMenuItemName: 'Portfolio',
      portfolioItems: newPortfolioItems
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
          id={this.state.portfolioItemToEdit.id}
          title={this.state.portfolioItemToEdit.title}
          imageUrl={this.state.portfolioItemToEdit.imageUrl}
          description={this.state.portfolioItemToEdit.description} />
      </div>
    );
  }
}

export default App;
