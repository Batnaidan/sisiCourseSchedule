import React, { Component } from 'react';
import './Body.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';


// chosenClasses[][0] - id of class
// chosenClasses[][1] - name of class
// chosenClasses[][2] - department name of class
// chosenClasses[][3] - credits of class

export default class Body extends Component {
  state = {
    visible: false,
    credits: 0,
    chosenClasses: [["1", "one", "dept1", "2"], ["2", "two", "dept2", "3"], ["3", "three", "dept3", "4"]]
  };

  findElementInArray(e){
    for (var i = 0; i < this.state.chosenClasses.length; i++) {
      if (this.state.chosenClasses[i][0] == e) {
        return i;
      }
    }
    return -1;
  }

  async removeElement(e){
    var index = this.findElementInArray(e);
    console.log(index);
    var temparray = this.state.chosenClasses;
    temparray.splice(index, 1);
    this.setState({
      chosenClasses: temparray
    })
  }
  
  generate(e){
    return (<ListItem>
      <ListItemIcon>
        <Avatar>
          <FolderIcon/>
        </Avatar>
      </ListItemIcon>
      <ListItemText primary={e[1]} secondary={e[2] + " - " + e[3] + " credits"} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => this.removeElement(e[0])}>
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

  show(){
    this.setState({ visible: true });
  }

  hide(){
    this.setState({ visible: false });
  }
  
  render() {
    return (
      <div id="outer-div">
        <div id="list-container">
          <p id="guide-text">Хичээлээ сонгоно уу</p>
          <div id="list-wrapper">
            <div>
              <List>
                {this.state.chosenClasses.map(e => this.generate(e))}
              <Divider style={{margin: "2vh"}}/>
              <ListItem button onClick={this.show.bind(this)}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add course" />
              </ListItem>
              </List>
            </div>
          </div>
          <div id="list-footer-container">
            <p id="credits-text">{this.state.credits} / 21 credits</p>
            <button>Calculate</button>
          </div>
        </div>
        <div id="modal-container">
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
            <div>Content</div>
          </Rodal>
        </div>
        <div id="graph-container"></div>
      </div>
    );
  }
}
