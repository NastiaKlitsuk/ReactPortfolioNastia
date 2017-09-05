import React, { Component } from 'react';
import Navigator from './components/navigator';
import ContentArea from './components/content-area';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      displayedMenuItemName: 'Portfolio',
      portfolioItemToEdit:{
        title:'',
        description: '',
        imageUrl: ''
      } 
    }
    this.onMenuChanged = this.onMenuChanged.bind(this);
    this.onEditPortfolioItem = this.onEditPortfolioItem.bind(this);
  }

  onMenuChanged(selectedMenuItemName) {
    alert('onMenuChanged');
    this.setState({ displayedMenuItemName: selectedMenuItemName,
                    portfolioItemToEdit: {}});
  }

  onEditPortfolioItem(itemTitle, itemImageUrl, itemDescription){
     alert('onEditPortfolioItem');
     alert(itemTitle);
     alert(itemImageUrl);
     alert(itemDescription);
     this.setState({displayedMenuItemName: 'Add new portfolio item',
       portfolioItemToEdit:
        {
          title: itemTitle,
          description: itemDescription, 
          imageUrl: itemImageUrl
        }});
  }

  render() {
    return (
      <div className="App">
        <Navigator onMenuChanged={this.onMenuChanged.bind(this)} />
        <ContentArea displayedMenuItemName={this.state.displayedMenuItemName} 
                     onEditPortfolioItem={this.onEditPortfolioItem.bind(this)}
                     title={this.state.portfolioItemToEdit.title}
                     imageUrl={this.state.portfolioItemToEdit.imageUrl}
                     description={this.state.portfolioItemToEdit.description}/>
      </div>
    );
  }
}

export default App;
