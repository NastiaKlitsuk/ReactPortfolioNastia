import React, { Component } from 'react';
import Navigator from './components/navigator';
import PortfolioController from './components/portfolio-controller';

class App extends Component {
  render() {
    return (
      <div>
        <Navigator/>
        <PortfolioController/>
      </div>
    );
  }
}

export default App;
