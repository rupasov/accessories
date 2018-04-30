import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Done from 'material-ui/svg-icons/action/done';
const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const AvatarExampleSimple = ({ colors, selectedColorKey }) =>
  console.log(selectedColorKey) || (
    <List style={{ cursor: 'pointer' }}>
      {Object.keys(colors).map(key => (
        <ListItem
          disabled={true}
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
          <span style={{ fontStyle: 'italic' }}>{colors[key].label}</span>
        </ListItem>
      ))}
    </List>
  );

export default AvatarExampleSimple;
