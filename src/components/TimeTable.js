import React, { Component, useEffect } from 'react';
import Timetable from 'react-timetable-events';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./TimeTable.css";

export default class TimeTable extends Component {
  state = {
    pageIndex: 1,
    possiblePages: 1,
    generated: false
  };

  handleOnChange = (e) => {
    // Accepts only numeric values
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === "" || re.test(e.target.value) && e.target.value <= this.props.dataFromParent.length && e.target.value >0) {
      this.setState({pageIndex: e.target.value})
    }
  };

  changeIndex = (dog) => {
    this.setState((state, props) => {
      if (state.pageIndex + dog < 1 
          || state.generated == false
          || state.pageIndex + dog > this.state.possiblePages
          || (state.pageIndex == "" && dog < 0)){
            return;
          }
      return { pageIndex:(state.pageIndex=="" ? 0 : state.pageIndex) + dog };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.pageIndex ,this.state.generated, this.state.possiblePages[this.state.pageIndex]);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dataFromParent !== this.props.dataFromParent){
      this.setState({possiblePages: this.props.dataFromParent,
        generated: true});
    }
  }
  
  render() {
    return (
      <div key={this.props.dataFromParent}>
        <div className="page-container">
          <ArrowBackIosIcon
            onClick={() => this.changeIndex(-1)}
            className="pageButton">
            </ArrowBackIosIcon>
          <div id="formWrapper">
            <form className="pageForm">
              <input 
                value={[this.state.pageIndex]}
                onChange={this.handleOnChange}
                onSubmit={this.handleSubmit}
                style={{ maxWidth: 30 }}>
              </input>
              <button type="submit" onClick={this.handleSubmit} hidden></button>
            </form>
            <div id="pagesLength-container">
              <p id="pagesLength" > &nbsp; / {this.props.dataFromParent.length}</p>
            </div>
          </div>
          <ArrowForwardIosIcon
            onClick={() => this.changeIndex(1)}
            className="pageButton">
          </ArrowForwardIosIcon>
        </div>
        <div className="table-container">
          <Timetable>{this.props.chosenClass}</Timetable>
        </div>
      </div>
    );
  }
}
