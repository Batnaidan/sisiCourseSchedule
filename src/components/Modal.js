import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
// import exitButtonImg from '../images/exitButton.png';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import api from '../api';
import './Modal.css';

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
var data = null;

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      deps: null,
    };
  }

  async componentDidMount() {
    data = (await api.getDep()).data.data;
    // this.setState({
    //   isLoading: false,
    // });
  }

  insertCourse = () => {
    console.log(this.data);
    // this.props.chosenCourses.push('selected shit');
  };

  render() {
    return (
      <Rodal
        width={50}
        height={30}
        measure={'rem'}
        visible={this.props.visible}
        onClose={this.props.onClose}
        duration={200}
      >
        {
          this.state.isLoading ? 'NOT DONE' : data
          // <TreeView className="root">
          //   {this.state.deps.map((el, index) => (
          //     <TreeItem nodeId={index} label={el[0]}></TreeItem>
          //   ))}
          // </TreeView>
        }
        <button onClick={this.insertCourse}>Select</button>
      </Rodal>
    );
  }
}
