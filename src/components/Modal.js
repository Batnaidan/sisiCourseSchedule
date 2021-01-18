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

  render() {
    return (
      <Rodal visible={this.props.visible} onClose={this.props.onClose}>
        <div>CONTENT</div>
      </Rodal>
    );
  }
}
