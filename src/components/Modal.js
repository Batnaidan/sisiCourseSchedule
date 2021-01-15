import React, { Component } from 'react';
import exitButtonImg from '../images/exitButton.png';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    display: 'flex',
    padding: '2rem',
    width: '60vw',
    height: '75vh',
    margin: 'auto',
    overflow: 'visible',
  },
};

export default class ModalComponent extends Component {
  state = {
    done: false,
    data: null,
  };
  async componentDidMount() {
    console.log('dogshit');
  }
  render() {
    return (
      <Modal
        isOpen={this.props.isModalVisible}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <img
          src={exitButtonImg}
          name="isModalTrue"
          onClick={this.props.handleModalClose}
          id="exitButton"
          alt="exitbutton"
        ></img>
      </Modal>
    );
  }
}
