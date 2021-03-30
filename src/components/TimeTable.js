import React, { Component, useEffect } from 'react';
import Timetable from 'react-timetable-events';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './TimeTable.css';
import moment from 'moment';

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
        key={hour}
        style={{
          ...defaultAttributes.style,
          textAlign: 'center',
          textDecoration: 'underline',
        }}
      >
        {hour}
      </div>
    );
  },
  renderEvent(event, defaultAttributes, styles) {
    return (
      <div
        {...defaultAttributes}
        title={event.name}
        key={event.id}
        style={{
          ...defaultAttributes.style,
          background: '#000',
        }}
      >
        <span className={styles.event_info}>[ {event.name} ]</span>
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
  }

  reset() {
    console.log(initialState);
    this.setState({
      timetableProps: 0,
    });
    this.setState({
      timetableProps: initialState,
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

    this.reset();

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
          let temp = this.state.timetableProps;
          temp.events[day[parseInt(i / 18)]].push({
            id: id,
            name:
              this.state.schedules[this.state.pageIndex][i].s_name +
              ' ' +
              this.state.schedules[this.state.pageIndex][i].e,
            type: 'custom',
            startTime: moment(startTime),
            endTime: moment(endTime),
          });
          this.setState({
            timetableProps: temp,
          });
          id++;
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
            let temp = this.state.timetableProps;
            temp.events[day[parseInt(i / 18)]].push({
              id: id,
              name:
                this.state.schedules[this.state.pageIndex][i].s_name +
                ' ' +
                this.state.schedules[this.state.pageIndex][i].e,
              type: 'custom',
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
      this.setState({ pageIndex: e.target.value });
    }
  };

  changeIndex = (dog) => {
    this.setState((state, props) => {
      if (
        state.pageIndex + dog < 1 ||
        state.generated === false ||
        state.pageIndex + dog > this.state.possiblePages ||
        (state.pageIndex == '' && dog < 0)
      ) {
        return;
      }
      return {
        pageIndex:
          parseInt(state.pageIndex == '' ? 0 : state.pageIndex) + parseInt(dog),
      };
    });
    this.handleTableData();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      this.state.pageIndex,
      this.state.generated,
      this.state.schedules[this.state.pageIndex]
    );
    this.handleTableData();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.dataFromParent !== this.props.dataFromParent) {
      this.setState({
        possiblePages: this.props.dataFromParent.length,
        schedules: this.props.dataFromParent,
        generated: true,
      });
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
            <form className="pageForm">
              <input
                value={[this.state.pageIndex]}
                onChange={this.handleOnChange}
                onSubmit={this.handleSubmit}
                style={{ maxWidth: 30 }}
              ></input>
              <button type="submit" onClick={this.handleSubmit} hidden></button>
            </form>
            <div id="pagesLength-container">
              <p id="pagesLength">
                {' '}
                &nbsp; / {this.props.dataFromParent.length}
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
