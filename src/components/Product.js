import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { camelize, nameFormatter } from '../util/helper';

const Product = ({ src, name, label, price }) => (
  <div style={{ padding: '0 60px' }}>
    <img src={src} alt={name} style={{ width: '100%' }} />
    <div style={{ textAlign: 'left' }}>
      <p>{label}</p>
      <p style={{ fontWeight: 'bold' }}>{name}</p>
      <p style={{ fontStyle: 'italic' }}>€ {price}</p>
      <hr />
    </div>
  </div>
);

export default Product;
