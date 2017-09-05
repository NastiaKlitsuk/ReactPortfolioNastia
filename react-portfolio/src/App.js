import React, { Component } from 'react';
import Navigator from './components/navigator';
import ContentArea from './components/content-area';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { displayedMenuItemName: 'Portfolio' }
    this.onMenuChanged = this.onMenuChanged.bind(this);
  }

  onMenuChanged(selectedMenuItemName) {
    alert('onMenuChanged');
    this.setState({ displayedMenuItemName: selectedMenuItemName });
  }

  render() {
    return (
      <div className="App">
        <Navigator onMenuChanged={this.onMenuChanged.bind(this)} />
        <ContentArea displayedMenuItemName={this.state.displayedMenuItemName} />
      </div>
    );
  }
}

export default App;
