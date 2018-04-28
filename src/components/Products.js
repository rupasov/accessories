import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import blanket from '../images/blanket.png';

const Products = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={4}>
        <img src={blanket} alt="Logo" style={{ width: '100%' }} />
      </Col>
      <Col xs={12} md={4}>
        <img src={blanket} alt="Logo" style={{ width: '100%' }} />
      </Col>
      <Col xs={12} md={4}>
        <img src={blanket} alt="Logo" style={{ width: '100%' }} />
      </Col>
    </Row>
  </Grid>
);

export default Products;
