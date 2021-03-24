import React, { Component } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import exitButtonImg from '../images/exitButton.png';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import api from '../api';
import './Modal.css';
import RenderCourse from './RenderCourse';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      subSchool: null,
      didClick: false,
      courses: null,
      selectedCourses: null,
    };
  }

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
    this.props.chosenCourses.push(this.state.selectedCourses);
  };
  renderCourse = async (depId) => {
    let data = (await api.getAllCourses(depId)).data.data;
    this.setState({
      didClick: true,
      courses: data,
    });
    console.log(data);
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
          // <div>
          //   <FormControl style={{ minWidth: 300, maxWidth: 300 }}>
          //     <InputLabel htmlFor="SubSchool">SubSchool</InputLabel>
          //     <Select defaultValue="" id="SubSchool">
          //       <MenuItem value="">
          //         <em>None</em>
          //       </MenuItem>
          //       {this.state.subSchool.map((el, index) => (
          //         <MenuItem value={index}>{el.Namem}</MenuItem>
          //       ))}
          //     </Select>
          //     {/* <button onClick={this.insertCourse}>Select</button> */}
          //   </FormControl>

          //   <div>
          //     <FormControl style={{ minWidth: 300 }}>
          //       <InputLabel htmlFor="Department">Department</InputLabel>
          //       <Select defaultValue="" id="Department" autoWidth>
          //         <MenuItem value="">
          //           <em>None</em>
          //         </MenuItem>
          //       </Select>
          //     </FormControl>
          //   </div>
          // </div>
          <TreeView
            className="root"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {this.state.subSchool.map((el, index) => (
              <TreeItem nodeId={`${index}`} label={el.Namem}>
                {el.dep.map((dep) => (
                  <TreeItem
                    nodeId={dep.ID}
                    label={dep.Namem}
                    onClick={() => this.renderCourse(dep.ID)}
                  ></TreeItem>
                ))}
              </TreeItem>
            ))}
          </TreeView>
        )}
        {this.state.didClick ? (
          <FormControl style={{ minWidth: 300 }}>
            <InputLabel htmlFor="Department">Department</InputLabel>
            <Select defaultValue="" id="Department" autoWidth>
              {this.state.courses.map((el, index) => (
                <MenuItem value={index}>{el.nm}</MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <FormControl style={{ minWidth: 300 }}>
            <InputLabel htmlFor="Department">Department</InputLabel>
            <Select defaultValue="" id="Department" autoWidth>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </Select>
          </FormControl>
        )}
      </Rodal>
    );
  }
}
