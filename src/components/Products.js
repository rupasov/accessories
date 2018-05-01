import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Product from './Product';
import { LABEL } from '../constants';
import { nameFormatter } from '../util/helper';

const Products = ({ products, selectedColors, changeColor }) => (
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
              productId={product.id}
              changeColor={changeColor}
            />
          </Col>
        );
      })}
    </Row>
  </Grid>
);

export default Products;
