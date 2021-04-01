import React, { Component, useEffect } from 'react';
import Timetable from 'react-timetable-events';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './TimeTable.css';
import moment from 'moment';

const classTypes = [
  '',
  'Лекц',
  'Семинар',
  'Лаб'
]

const initialState = {
  events: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  hoursInterval: [7, 23],
  timeLabel: 'Hours',
  renderHour(hour, defaultAttributes, styles) {
    return (
      <div
        {...defaultAttributes}
        style={{
          ...defaultAttributes.style,
          textAlign: 'center',
          textDecoration: 'underline'
        }}
      >
        {hour}
      </div>
    );
  },
  renderEvent(event, defaultAttributes, styles) {
    let type = parseInt(event.type);
    let color = ['#000000', '#e67e96', '#f0a000', '#8bbf43', '#666666'];
    return (
      <div
        {...defaultAttributes}
        title={event.name}
        style={{
          ...defaultAttributes.style,
          backgroundColor: color[type],
          fontSize: '14px',
        }}
        isclassnode="true"
      >
        <span className={styles.event_info}>[ {classTypes[event.type] } ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {event.bair}</span>
        <span className={styles.event_info}>{event.name}</span>
        <span className={styles.event_info}>
          {event.startTime.format('HH:mm')} - {event.endTime.format('HH:mm')}
        </span>
      </div>
    );
  },
};

export default class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 1,
      possiblePages: 1,
      schedules: 0,
      generated: false,
      timetableProps: initialState,
    };
    this.reset = this.reset.bind(this);
  }

  removeClassEvents() {
    let classNodes = document.querySelectorAll('div[isclassnode="true"]');
    if (classNodes) classNodes.forEach((node) => node.remove());
  }

  reset() {
    this.setState({
      timetableProps: 0,
    });
    this.setState({
      timetableProps: { initialState },
    });
  }

  handleTableData = () => {
    if (
      this.state.generated === false ||
      !(
        this.state.pageIndex > 0 &&
        this.state.pageIndex < this.state.possiblePages
      )
    )
      return;

    // Stores hid of class, to check if next nodes contain the same class or different class
    // in other words, checks if the class in the next node is the same as this one
    let classContinue = '';
    let id = 1;
    for (let i = 0; i < 126; i++) {
      // If current time node is not empty
      if (this.state.schedules[this.state.pageIndex][i] != 0) {
        // If classContinue is empty
        if (classContinue == '') {
          classContinue = this.state.schedules[this.state.pageIndex][i].hid;
          let times = this.state.schedules[this.state.pageIndex][i].t.split(
            '-'
          );
          let startTime = '2018-02-23T' + times[0] + ':00';
          let endTime = '2018-02-23T' + times[1] + ':00';
          let day = [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
          ];
          let temp = initialState;
          temp.events[day[parseInt(i / 18)]].push({
            id: id,
            name:
              this.state.schedules[this.state.pageIndex][i].s_name +
              ' - ' +
              this.state.schedules[this.state.pageIndex][i].e,
            type: this.state.schedules[this.state.pageIndex][i].ci,
            bair: this.state.schedules[this.state.pageIndex][i].r_bname +
              ' байр, ' + 
              this.state.schedules[this.state.pageIndex][i].r_name,
            startTime: moment(startTime),
            endTime: moment(endTime),
          });
          this.setState({
            timetableProps: temp,
          });
          id++;
          setTimeout(() => this.state.renderEvent, 500);
        }

        // If classContinue is not empty
        else {
          if (
            classContinue != this.state.schedules[this.state.pageIndex][i].hid
          ) {
            classContinue = this.state.schedules[this.state.pageIndex][i].hid;
            let times = this.state.schedules[this.state.pageIndex][i].t.split(
              '-'
            );
            let startTime = '2018-02-23T' + times[0] + ':00';
            let endTime = '2018-02-23T' + times[1] + ':00';
            let day = [
              'monday',
              'tuesday',
              'wednesday',
              'thursday',
              'friday',
              'saturday',
              'sunday',
            ];
            let temp = initialState;
            temp.events[day[parseInt(i / 18)]].push({
              id: id,
              name:
                this.state.schedules[this.state.pageIndex][i].s_name +
                ' - ' +
                this.state.schedules[this.state.pageIndex][i].e,
              type: this.state.schedules[this.state.pageIndex][i].ci,
              bair: this.state.schedules[this.state.pageIndex][i].r_bname +
                ' байр, ' + 
                this.state.schedules[this.state.pageIndex][i].r_name,
              startTime: moment(startTime),
              endTime: moment(endTime),
            });
            this.setState({
              timetableProps: temp,
            });
            id++;
          }
        }
      }

      // If current time node is empty
      else {
        classContinue = '';
      }
    }
  };

  handleOnChange = (e) => {
    // Accepts only numeric values
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (
      e.target.value === '' ||
      (re.test(e.target.value) &&
        e.target.value <= this.props.dataFromParent.length &&
        e.target.value > 0)
    ) {
      this.setState((state) => ({ pageIndex: e.target.value }));
      console.log(e.target.value);
      console.log(this.state.pageIndex);
    }
  };

  changeIndex(dog) {
    dog = parseInt(dog);
    if (
      this.state.pageIndex + dog < 1 ||
      this.state.generated === false ||
      this.state.pageIndex + dog > this.state.possiblePages ||
      (this.state.pageIndex == '' && dog < 0)
    ) {
      return;
    } else if (!this.state.pageIndex) {
      this.setState((state) => ({
        pageIndex: 1,
      }));
      return;
    }
    this.setState((state) => ({
      pageIndex: parseInt(state.pageIndex) + dog,
    }));
    this.reset();
    this.removeClassEvents();
    this.handleTableData();
  }

  handleSubmit(e) {
    if (e) e.preventDefault();
    this.reset();
    this.removeClassEvents();
    this.handleTableData();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.dataFromParent != this.props.dataFromParent) {
      console.log("aasdasdasdasdasd");
      this.setState({
        possiblePages: this.props.dataFromParent.length - 1,
        schedules: this.props.dataFromParent,
        generated: true,
      });
      this.removeClassEvents();
      this.reset();
      setTimeout(() => this.handleSubmit(), 500);
    }
  }

  render() {
    return (
      <div>
        <div className="page-container">
          <ArrowBackIosIcon
            onClick={() => this.changeIndex(-1)}
            className="pageButton"
          ></ArrowBackIosIcon>
          <div id="formWrapper">
            <form className="pageForm" onSubmit={this.handleSubmit.bind(this)}>
              <input
                value={[this.state.pageIndex]}
                onChange={this.handleOnChange}
                onSubmit={this.handleSubmit}
                style={{ maxWidth: 30 }}
              ></input>
              <button type="submit" onClick={this.handleSubmit.bind(this)} hidden></button>
            </form>
            <div id="pagesLength-container">
              <p id="pagesLength">
                {' '}
                &nbsp; / {this.props.dataFromParent.length - 1}
              </p>
            </div>
          </div>
          <ArrowForwardIosIcon
            onClick={() => this.changeIndex(1)}
            className="pageButton"
          ></ArrowForwardIosIcon>
        </div>
        <div className="table-container">
          <Timetable {...this.state.timetableProps} />
        </div>
      </div>
    );
  }
}
