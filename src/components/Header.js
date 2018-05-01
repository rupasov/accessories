import React from 'react';

const Header = ({ str }) => (
  <header className="App-section">
    {str && <h1 className="App-title">{str}</h1>}
  </header>
);

export default Header;
