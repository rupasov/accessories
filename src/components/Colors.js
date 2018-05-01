import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Done from 'material-ui/svg-icons/action/done';

const styles = {
  list: {
    cursor: 'pointer'
  },
  label: {
    fontStyle: 'italic',
    color: '#6f6f6f'
  }
};

const Colors = ({ colors, selectedColorKey, productId, changeColor }) => (
  <List style={styles.list}>
    {Object.keys(colors).map(key => (
      <ListItem
        key={key}
        disabled={selectedColorKey === key}
        onClick={() => changeColor(productId, key)}
        leftAvatar={
          <Avatar
            src={colors[key].pattern}
            icon={selectedColorKey === key ? <Done /> : null}
            backgroundColor={`#${colors[key].hex}`}
            size={30}
          />
        }
      >
        <span style={styles.label}>{colors[key].label}</span>
      </ListItem>
    ))}
  </List>
);

Colors.propTypes = {
  colors: PropTypes.object,
  selectedColorKey: PropTypes.string,
  productId: PropTypes.string,
  changeColor: PropTypes.func
};

export default Colors;
