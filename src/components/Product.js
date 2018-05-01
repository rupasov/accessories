import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Colors from '../components/Colors';

const styles = {
  container: { padding: '0 60px', cursor: 'pointer' },
  image: { width: '100%' },
  infoContainer: { textAlign: 'left' },
  name: { fontWeight: 'bold' },
  price: { fontStyle: 'italic', color: '#6F6F6F' }
};

class Product extends Component {
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
    const {
      src,
      name,
      label,
      price,
      colors,
      selectedColorKey,
      productId,
      changeColor
    } = this.props;
    return (
      <div>
        <div style={styles.container} onClick={this.handleClick}>
          <img src={src} alt={name} style={styles.image} />
          <div style={styles.infoContainer}>
            <p>{label}</p>
            <p style={styles.name}>{name}</p>
            <p style={styles.price}>€ {price}</p>
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
            <Colors
              colors={colors}
              selectedColorKey={selectedColorKey}
              productId={productId}
              changeColor={changeColor}
            />
          </Menu>
        </Popover>
      </div>
    );
  }
}

Product.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.string,
  colors: PropTypes.object,
  selectedColorKey: PropTypes.string,
  productId: PropTypes.string,
  changeColor: PropTypes.func
};

export default Product;
