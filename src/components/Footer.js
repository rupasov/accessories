import React from 'react';

const Footer = ({ str }) => (
  <footer className="App-section">
    {str && <h1 className="App-title">{str}</h1>}
  </footer>
);

export default Footer;
