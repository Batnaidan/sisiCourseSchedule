import React, { Component } from 'react';
// import exitButtonImg from '../images/exitButton.png';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

// const modalStyles = {
//   content: {
//     display: 'flex',
//     padding: '2rem',
//     width: '60vw',
//     height: '75vh',
//     margin: 'auto',
//     overflow: 'visible',
//   },
// };

export default class Modal extends Component {
  state = {
    done: false,
    data: null,
  };
  insertCourse = () => {
    this.props.chosenCourses.push('selected shit');
  };
  render() {
    return (
      <Rodal
        width={25}
        height={20}
        measure={'rem'}
        visible={this.props.visible}
        onClose={this.props.onClose}
        duration={200}
      >
        <div></div>
        <button onClick={this.insertCourse}>Select</button>
      </Rodal>
    );
  }
}
