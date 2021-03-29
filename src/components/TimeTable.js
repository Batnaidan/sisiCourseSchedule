import React, { Component } from 'react';
import Timetable from 'react-timetable-events';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default class TimeTable extends Component {
  state = {
    pageIndex: 1,
  };

  setPageIndex = (e) => {
    if (e.key === 'Enter') {
      this.setState((state, props) => {
        return { pageIndex: e.target.value };
      });
    }
    console.log(e.target.value);
  };
  changeIndex = (dog) => {
    this.setState((state, props) => {
      if (state.pageIndex === 1 && dog < 0) return;
      return { pageIndex: state.pageIndex + dog };
    });
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="button"
            onClick={() => this.changeIndex(-1)}
            value="back"
            className="pageButton"
          ></input>
          <input
            type="number"
            value={[this.state.pageIndex]}
            onKeyDown={(e) => this.setPageIndex(e)}
            style={{ maxWidth: 30 }}
          ></input>
          <input
            type="button"
            onClick={() => this.changeIndex(1)}
            value="forward"
            className="pageButton"
          ></input>
        </div>
        {/* <Timetable>{this.props.chosenClass}</Timetable> */}
      </div>
    );
  }
}
