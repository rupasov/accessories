import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Product from './Product';
import { LABEL } from '../constants';
import { camelize, nameFormatter } from '../util/helper';
import images from '../util/images';

const Products = ({ products, selectedColors }) => (
  <Grid fluid>
    <Row>
      {products.map(product => {
        const initKey = selectedColors[product.id];
        return (
          <Col xs={12} md={4} key={product.id}>
            <Product
              src={product.colours[initKey].src}
              label={LABEL}
              price={product.colours[initKey].price}
              name={nameFormatter(product.label)}
              colors={product.colours}
              selectedColorKey={initKey}
            />
          </Col>
        );
      })}
    </Row>
  </Grid>
);

export default Products;
