import React from 'react';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Colors from '../components/Colors';

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
        <div
          style={{ padding: '0 60px', cursor: 'pointer' }}
          onClick={this.handleClick}
        >
          <img src={src} alt={name} style={{ width: '100%' }} />
          <div style={{ textAlign: 'left' }}>
            <p>{label}</p>
            <p style={{ fontWeight: 'bold' }}>{name}</p>
            <p style={{ fontStyle: 'italic', color: '#6F6F6F' }}>€ {price}</p>
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

export default Product;
