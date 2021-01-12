import React, { Component } from 'react';
import Modal from 'react-modal';
import exitButtonImg from '../images/exitButton.png';
import './Body.css';

const modalStyles = {
  content: {
    display: 'flex',
    padding: '2rem',
    width: '60vw',
    height: '75vh',
    margin: 'auto',
    overflow: 'visible'
  }
};

export default class Body extends Component {
  state = {
    isModalVisible: false,
  };
  handleModalOpen = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  handleModalClose = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  render() {
    return (
      <div>
        <button name="isModalTrue" onClick={this.handleModalOpen}>
          Test Modal
        </button>
        <Modal 
          isOpen={this.state.isModalVisible}
          style={modalStyles}
          contentLabel="Example Modal">
          <p>test</p>
          <img 
            src={exitButtonImg} 
            name="isModalTrue" 
            onClick={this.handleModalClose} 
            id="exitButton"
            alt="exitbutton">
          </img>
        </Modal>
      </div>
    );
  }
}
