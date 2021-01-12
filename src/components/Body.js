import React, { Component } from 'react';
import Modal from 'react-modal';
import './Body.css';

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
          NOT TEST
        </button>
        <Modal isOpen={this.state.isModalVisible}>
          <p>test</p>
          <button name="isModalTrue" onClick={this.handleModalClose}>
            Close Modal
          </button>
        </Modal>
      </div>
    );
  }
}
