import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Product from './Product';
import { LABEL } from '../constants';
import { camelize, nameFormatter } from '../util/helper';
import images from '../util/images';

const Products = ({ products }) => (
  <Grid fluid>
    <Row>
      {products.map(product => (
        <Col xs={12} md={4} key={product.id}>
          <Product
            src={images[camelize(nameFormatter(product.label))]}
            label={LABEL}
            price={product.price}
            name={nameFormatter(product.label)}
          />
        </Col>
      ))}
    </Row>
  </Grid>
);

export default Products;
