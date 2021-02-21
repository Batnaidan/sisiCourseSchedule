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

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 300,
  },
});

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      subSchool: null,
    };
  }
  classes = useStyles();

  async componentDidMount() {
    let data = (await api.getDep()).data.data;
    console.log(data);
    this.setState({
      isLoading: false,
      subSchool: data,
    });
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
        {this.state.isLoading ? (
          'Loading'
        ) : (
          <TreeView
            className="root"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {this.state.subSchool.map((el, index) => (
              <TreeItem nodeId={`${index}`} label={el.Namem}>
                {el.dep.map((dep) => (
                  <TreeItem nodeId={dep.ID} label={dep.Namem}></TreeItem>
                ))}
              </TreeItem>
            ))}
          </TreeView>
        )}
        <button onClick={this.insertCourse}>Select</button>
      </Rodal>
    );
  }
}
