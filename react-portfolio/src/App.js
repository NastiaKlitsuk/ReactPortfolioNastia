import React, { Component } from 'react';
import Navigator from './components/navigator';
import ContentArea from './components/content-area';
import './App.css';
import portfolioItems from './services/portfolio-items.json';
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
    this.onChangedProtfolioItem = this.onChangedProtfolioItem.bind(this);
  }

  onMenuChanged(selectedMenuItemName) {
    //alert('onMenuChanged');
    this.setState({
      displayedMenuItemName: selectedMenuItemName,
      portfolioItemToEdit: {}
    });
  }

  onEditPortfolioItem(idx, itemTitle, itemImageUrl, itemDescription) {
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

  onRemovePortfolioItem(idx) {
    const positionItemToRemove = _.findIndex(this.state.portfolioItems, { id: idx });
    this.setState({
      portfolioItems: [...this.state.portfolioItems.slice(0, positionItemToRemove),
      ...this.state.portfolioItems.slice(positionItemToRemove + 1)]
    });
  }

  onChangedProtfolioItem(event, idx, itemTitle, itemImageUrl, itemDescription) {
    event.preventDefault();
    alert(idx);
    const positionItemToUpdate = _.findIndex(this.state.portfolioItems, { id: idx });
    alert(positionItemToUpdate);
    const updatedItem = {...this.state.portfolioItems[positionItemToUpdate],
      title: itemTitle,
      imageUrl: itemImageUrl,
      description: itemDescription
    };
    let newPortfolioItems = [...this.state.portfolioItems.slice(0, positionItemToUpdate), updatedItem,
      ...this.state.portfolioItems.slice(positionItemToUpdate + 1)];
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
          onChangedProtfolioItem={this.onChangedProtfolioItem.bind(this)}
          id={this.state.portfolioItemToEdit.id}
          title={this.state.portfolioItemToEdit.title}
          imageUrl={this.state.portfolioItemToEdit.imageUrl}
          description={this.state.portfolioItemToEdit.description} />
      </div>
    );
  }
}

export default App;
