import React, { Component } from 'react';
import './Share.css';

class Share extends Component {
  render() {
    return (
      <div className="shareContainer">
        <button className="Facebook"/>
        <button className="Twitter"/>
        <button className="LinkedIn"/>        
      </div>
    );
  }
}

export default Share;