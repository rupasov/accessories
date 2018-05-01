import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Done from 'material-ui/svg-icons/action/done';

const Colors = ({ colors, selectedColorKey, productId, changeColor }) =>
  console.log(selectedColorKey) || (
    <List style={{ cursor: 'pointer' }}>
      {Object.keys(colors).map(key => (
        <ListItem
          key={key}
          disabled={selectedColorKey === key}
          onClick={() => changeColor(productId, key)}
          leftAvatar={
            <Avatar
              src={colors[key].pattern}
              icon={selectedColorKey === key ? <Done /> : null}
              key={colors[key].id}
              color={'white'}
              backgroundColor={`#${colors[key].hex}`}
              size={30}
            />
          }
        >
          <span style={{ fontStyle: 'italic', color: '#6f6f6f' }}>
            {colors[key].label}
          </span>
        </ListItem>
      ))}
    </List>
  );

export default Colors;
