import React, { Component } from 'react';
import './Body.css';
import ListCourse from './ListCourse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import Modal from './Modal';
import Button from '@material-ui/core/Button';

// chosenCourse stores data from classes, indexes specify individual courses
// and the value contains "data" object. Data object's children include:
// "Row" - Array that contains schedules of individual courses
// "_id" - unique id , "v" - course id, "nm" - name of course

let chosenCourse = [];

// Array to hold

let schedules = [][0];

export default class Body extends Component {
  state = {
    visible: false,
    credits: 0,
    // chosenClasses[][0] - id of class
    // chosenClasses[][1] - name of class
    // chosenClasses[][2] - department name of class
    // chosenClasses[][3] - credits of class

    chosenClasses: [
      ['25047', 'Алгебр', 'dept1', '3'],
      ['2', 'two', 'dept2', '3'],
      ['3', 'three', 'dept3', '4'],
    ],
  };

  // findElementInArray(e){
  //   for (var i = 0; i < this.state.chosenClasses.length; i++) {
  //     if (this.state.chosenClasses[i][0] == e) {
  //       return i;
  //     }
  //   }
  //   return -1;
  // }

  // async removeElement(e){
  //   var index = this.findElementInArray(e);
  //   console.log(index);
  //   var temparray = this.state.chosenClasses;
  //   temparray.splice(index, 1);
  //   this.setState({
  //     chosenClasses: temparray
  //   })
  // }

  timetable = [][4];
  classes_indexed = 0;
  // Algorithm to generate schedule and store in array schedules
  // go through classes one by one, every instance individually... recursive function checking cases every time.
  /* case 1:
  course is empty
  skip;

  case 2:
  course has ci = 4
  choose 1;

  case 3:
  course has grid = 0      {

  case 3.1:
  course has only lecture

  case 3.2:
  course has no lecture

  case 3.3:
  course has lecture with sem/labs 

  }

  case 4:
  course has grid =/= 0       {

  case 4.1: 
  course has only lectures

  case 4.2:
  course has no lectures

  case 4.3:
  course has lectures with sem/lab combinations

  } */

  // generate_schedules(idx) {
  //   if (!Array.isArray(chosenCourse) || !chosenCourse.length) {
  //     return;
  //   }
  //   if (chosenCourse[idx].row.length != 0) {
  //     if (chosenCourse.row[idx].ci == '4') {
  //     } else if (chosenCourse.row[idx].grid == '0') {
  //     } else {
  //     }
  //   }
  // }

  removeCourse(i) {
    let temp = this.state.chosenClasses.slice();
    temp.splice(i, 1);
    this.setState({
      chosenClasses: temp,
    });
  }

  addCredits(creds) {
    this.setState({
      credits: this.state.credits + parseInt(creds),
    });
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
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
                {this.state.chosenClasses.map((e, i) => (
                  <ListCourse
                    e={this.state.chosenClasses[i]}
                    removeCourses={this.removeCourse.bind(this)}
                    key={i}
                    index={i}
                  ></ListCourse>
                ))}
                <Divider style={{ margin: '2vh' }} />
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
            <Button
              variant="contained"
              style={{ 'background-color': '#79cae0' }}
              size="large"
            >
              Generate Schedule
            </Button>
          </div>
        </div>
        <div id="modal-container">
          <Modal
            visible={this.state.visible}
            onClose={this.hide.bind(this)}
            chosenCourses={chosenCourse}
          ></Modal>
        </div>
        <div id="graph-container"></div>
      </div>
    );
  }
}
