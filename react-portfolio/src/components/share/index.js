import React from 'react';
import './Share.css';

const Share = () => {
  return (
    <div className="ShareContainer">
      <a href="http://www.facebook.com" target="http://www.facebook.com">
        <button className="Facebook" />
      </a>
      <a href="http://twitter.com/twitter" target="http:/twitter.com/twitter">
        <button className="Twitter" />
      </a>
      <a href="http://www.linkedin.com" target="http://www.linkedin.com">
        <button className="LinkedIn" />
      </a>
    </div>
  );
}

export default Share;