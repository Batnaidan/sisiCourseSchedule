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

let chosenCourse = [
  {
    row: [
      {
        hid: '133952',
        weekday: '3',
        timeid: '7',
        durtime: '2',
        schedType: '1',
        s_name: 'Комплекс анализ',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '120',
        r_bname: '1',
        e: 'Батзориг .У',
        dw: '16',
        d: '2020.9.2',
        ch: '10',
        cnt: '25',
        cm: '',
        t: '12:40-14:10',
        snx: 'MATH311',
        cre: '3',
        courseid: '23524',
        eid: '10011003157',
        roomid: '339',
        grid: '0',
      },
      {
        hid: '133953',
        weekday: '3',
        timeid: '9',
        durtime: '2',
        schedType: '1',
        s_name: 'Комплекс анализ',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '120',
        r_bname: '1',
        e: 'Батзориг .У',
        dw: '16',
        d: '2020.9.2',
        ch: '10',
        cnt: '25',
        cm: '',
        t: '14:20-15:50',
        snx: 'MATH311',
        cre: '3',
        courseid: '23524',
        eid: '10011003157',
        roomid: '339',
        grid: '0',
      },
    ],
    _id: '5ffd89b4572b501388851bd4',
    v: '23524',
    nm: 'Комплекс анализ',
  },
  {
    row: [
      {
        hid: '136551',
        weekday: '2',
        timeid: '13',
        durtime: '2',
        schedType: '1',
        s_name: 'Магадлалын онол, математик статистик',
        s_comp: 'Лекц',
        ci: '1',
        r_name: '118',
        r_bname: '1',
        e: 'Итгэл.М',
        dw: '16',
        d: '2020.9.1',
        ch: '17',
        cnt: '24',
        cm: '',
        t: '17:40-19:10',
        snx: 'MATH320',
        cre: '3',
        courseid: '26502',
        eid: '10011001577',
        roomid: '790',
        grid: '0',
      },
      {
        hid: '136553',
        weekday: '3',
        timeid: '13',
        durtime: '2',
        schedType: '1',
        s_name: 'Магадлалын онол, математик статистик',
        s_comp: 'Семинар',
        ci: '2',
        r_name: '116',
        r_bname: '3a',
        e: 'Итгэл.М',
        dw: '16',
        d: '2020.9.2',
        ch: '17',
        cnt: '24',
        cm: '',
        t: '17:40-19:10',
        snx: 'MATH320',
        cre: '3',
        courseid: '26502',
        eid: '10011001577',
        roomid: '11',
        grid: '0',
      },
    ],
    _id: '5ffd89b4572b501388851bd7',
    v: '26502',
    nm: 'Магадлалын онол, математик статистик',
  },
];

// Array to hold possible schedules

let schedules = [];

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

  // temp array to hold schedule of one class
  // eq of time: (Weekday - 1) * 18 + timeid

  timetable = new Array(126).fill(0);
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
  course has grid =/= 0    {

  case 4.1: 
  course has only lectures

  case 4.2:
  course has no lectures

  case 4.3:
  course has lectures with sem/lab combinations {

    case 4.3.1:
    course has 2 different teachers on one class so that lectures grids are same and seminars grid are same

  }

  } */

  // Checks if course overlaps with chosenCourse array schedule

  checkOverlap = (timeidx, timelen) => {
    for (let j = 0; j < timelen; j++) {
      if (this.timetable[timeidx + j] != 0) {
        return true;
      }
    }
    return false;
  };

  // Returns array containing indexes of classes filtered by type (aka 'ci')
  // This is done so that instead of looping over every index in array and filtering by type there,
  // a for loop is called on an array containing only indexes of classes of the specified type, to save resources

  findIndexInChosenCoursesByType = (idx, ci) => {
    var arr = [];
    for (let i = 0; i < chosenCourse[idx].row.length; i++) {
      if (chosenCourse[idx].row[i].ci == ci) {
        arr.push(i);
      }
    }
    return arr;
  };

  // Function to run when ci value is 4

  whenCiIs4 = (idx) => {
    for (let i = 0; i < chosenCourse[idx].row.length; i++) {
      var timeidx =
        (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
        Number(chosenCourse[idx].row[i].timeid) -
        1;
      var timelen = Number(chosenCourse[idx].row[i].durtime);
      if (this.checkOverlap(timeidx, timelen) == false) {
        for (let j = 0; j < timelen; j++) {
          this.timetable[timeidx + j] = chosenCourse[idx].row[i];
        }
        if (idx == chosenCourse.length - 1) {
          schedules.push(this.timetable);
        } else {
          this.generate_schedules(idx + 1);
        }
        for (let j = 0; j < timelen; j++) {
          this.timetable[timeidx + j] = 0;
        }
      }
    }
  };

  // TODO: remove timetable indexes after calling recursive function
  // TODO: save memory by adding class info on the first index of timetables,
  // ----- then adding the amount of indexes needed to go back to get the class info to the latter indexes

  generate_schedules = (idx) => {
    console.log(idx + ' ' + chosenCourse.length);
    if (
      !Array.isArray(chosenCourse) ||
      !chosenCourse.length ||
      idx >= chosenCourse.length
    ) {
      console.log('ARray is empty bruh or u reached the end of the loop');
      return;
    }
    if (chosenCourse[idx].row.length != 0) {
      if (this.findIndexInChosenCoursesByType(idx, 4).length > 0) {
        this.whenCiIs4(idx);
      } else if (chosenCourse[idx].row[0].grid == '0') {
        // get arrays of indexes of classes by type

        let lecArr = this.findIndexInChosenCoursesByType(idx, 1);
        let semArr = this.findIndexInChosenCoursesByType(idx, 2);
        let labArr = this.findIndexInChosenCoursesByType(idx, 3);
        if (lecArr.length > 0) {
          for (let i of lecArr) {
            let timeidx =
              (Number(chosenCourse[idx].row[i].weekday) - 1) * 18 +
              Number(chosenCourse[idx].row[i].timeid) -
              1;
            let timelen = Number(chosenCourse[idx].row[i].durtime);
            if (this.checkOverlap(timeidx, timelen) == false) {
              for (let j = 0; j < timelen; j++) {
                this.timetable[timeidx + j] = chosenCourse[idx].row[i];
              }
              if (semArr.length > 0) {
                // lecture with sem

                for (let j of semArr) {
                  let sem_timeidx =
                    (Number(chosenCourse[idx].row[j].weekday) - 1) * 18 +
                    Number(chosenCourse[idx].row[j].timeid) -
                    1;
                  let sem_timelen = Number(chosenCourse[idx].row[j].durtime);
                  if (this.checkOverlap(sem_timeidx, sem_timelen) == false) {
                    for (let k = 0; k < sem_timelen; k++) {
                      this.timetable[timeidx + k] = chosenCourse[idx].row[j];
                    }
                    if (labArr.length > 0) {
                      // lecture with sem and lab

                      for (let jj of labArr) {
                        let lab_timeidx =
                          (Number(chosenCourse[idx].row[jj].weekday) - 1) * 18 +
                          Number(chosenCourse[idx].row[jj].timeid) -
                          1;
                        let lab_timelen = Number(
                          chosenCourse[idx].row[jj].durtime
                        );
                        if (
                          this.checkOverlap(lab_timeidx, lab_timelen) == false
                        ) {
                          for (let k = 0; k < lab_timelen; k++) {
                            this.timetable[timeidx + k] =
                              chosenCourse[idx].row[jj];
                          }
                          if (idx == chosenCourse.length - 1) {
                            schedules.push(this.timetable);
                          } else {
                            this.generate_schedules(idx + 1);
                          }
                          for (let k = 0; k < lab_timelen; k++) {
                            this.timetable[timeidx + k] = 0;
                          }
                        }
                      }
                    } else {
                    }
                  }
                }
              } else if (labArr.length > 0) {
                // lecture with lab
              } else {
                // only lecture
              }
            }
          }
        } else {
          // no lecture
        }
      } else {
        // grid not 0
      }
    } else {
      this.generate_schedules(idx + 1);
    }
  };

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
              onClick={() => this.generate_schedules(0)}
            >
              Generate Schedule
            </Button>
          </div>
        </div>
        {this.state.visible ? (
          <div id="modal-container">
            <Modal
              visible={this.state.visible}
              onClose={this.hide.bind(this)}
              chosenCourses={chosenCourse}
            ></Modal>
          </div>
        ) : null}
        <div id="graph-container"></div>
      </div>
    );
  }
}
