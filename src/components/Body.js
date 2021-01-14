import React, { Component } from 'react';
import Modal from 'react-modal';
import exitButtonImg from '../images/exitButton.png';
import './Body.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

const modalStyles = {
  content: {
    display: 'flex',
    padding: '2rem',
    width: '60vw',
    height: '75vh',
    margin: 'auto',
    overflow: 'visible'
  }
};



export default class Body extends Component {
  state = {
    isModalVisible: false,
    credits: 0,
    chosenClasses: []
  };

  removeElement = (e) => {
    var index = this.state.chosenClasses.findIndex(a => a === e);
    console.log(e);
    console.log(index);
    var temparray = this.state.chosenClasses;
    temparray.splice(index, 1);
    this.setState({
      chosenClasses: temparray
    })
  }
  
  generate = (e) => {
    return (<ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={e}/>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => this.removeElement(e)}>
          <DeleteIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>);
  }

  addCredits(creds){
    this.setState({
      credits: this.state.credits + parseInt(creds)
    })
  }

  handleModalOpen(){
    this.setState({
      isModalVisible: true,
    });
  };

  handleModalClose(){
    this.setState({
      isModalVisible: false,
    });
  };
  
  render() {
    return (
      <div id="outer-div">
        <Modal 
          isOpen={this.state.isModalVisible}
          style={modalStyles}
          contentLabel="Example Modal">
          <p>test</p>
          <img 
            src={exitButtonImg} 
            name="isModalTrue" 
            onClick={this.handleModalClose} 
            id="exit-button"
            alt="exit-button">
          </img>
        </Modal>
        <div id="list-container">
          <p id="guide-text">Хичээлээ сонгоно уу</p>
          <div id="list-wrapper">
            <div>
              <List>
                {this.state.chosenClasses.map(e => this.generate(e))}
              </List>
              <Divider/>
            </div>
          </div>
          <div id="list-footer-container">
            <p id="credits-text">{this.state.credits} / 21 credits</p>
            <button>Calculate</button>
          </div>
        </div>
        <div id="graph-container"></div>
      </div>
    );
  }
}
