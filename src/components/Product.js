import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { camelize, nameFormatter } from '../util/helper';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Colors from '../components/Colors';
import Avatar from 'material-ui/Avatar';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500
} from 'material-ui/styles/colors';
const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.open
    };
  }

  handleClick = event => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { src, name, label, price, colors, selectedColorKey } = this.props;
    return (
      <div>
        <div
          style={{ padding: '0 60px', cursor: 'pointer' }}
          onClick={this.handleClick}
        >
          <img src={src} alt={name} style={{ width: '100%' }} />
          <div style={{ textAlign: 'left' }}>
            <p>{label}</p>
            <p style={{ fontWeight: 'bold' }}>{name}</p>
            <p style={{ fontStyle: 'italic' }}>€ {price}</p>
            <hr />
          </div>
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'middle', vertical: 'center' }}
          targetOrigin={{ horizontal: 'middle', vertical: 'center' }}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <Colors colors={colors} selectedColorKey={selectedColorKey} />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default Product;
