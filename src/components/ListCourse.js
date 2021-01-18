import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class ListCourse extends Component {
  render() {
    return (
      <ListItem>
        <ListItemIcon>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary={this.props.e[1]}
          secondary={this.props.e[2] + ' - ' + this.props.e[3] + ' credits'}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => this.props.removeCourses(this.props.index)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
