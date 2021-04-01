import React, { Component } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import api from '../api';
import './Modal.css';
import Checkbox from '@material-ui/core/Checkbox';
// import RenderCourse from './RenderCourse';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      subSchool: null,
      didClick: false,
      selectedDep: null,
      selectedCourses: [],
      isFull: false,
    };
  }

  async componentDidMount() {
    let data = (await api.getDep()).data.data;
    this.setState({
      isLoading: false,
      subSchool: data,
    });
  }

  insertCourse = () => {
    console.log(this.state.selectedCourses);
    let credit = this.props.credits;
    this.state.selectedCourses.forEach((el) => {
      if (credit + parseInt(this.data[el].row[0].cre) <= 21) {
        this.props.chosenCourses.push(this.data[el]);
        this.props.chosenClasses.push([
          this.data[el].v,
          this.data[el].nm + ' - ' + this.data[el].row[0].snx,
          this.state.selectedDep,
          this.data[el].row[0].cre,
        ]);
        credit += parseInt(this.data[el].row[0].cre);
        this.props.changeCredit(this.data[el].row[0].cre);
      } else {
        this.setState({
          isFull: true,
        });
      }
    });
    this.props.onClose();
  };
  handleSelect = async (event) => {
    this.setState((state) => ({
      selectedCourses: event.target.value,
    }));
  };
  renderCourse = async (depId, depName) => {
    this.data = (await api.getAllCourses(depId)).data.data;
    this.setState({
      didClick: true,
      selectedDep: depName,
    });
    // console.log();
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
          <div className="container">
            <TreeView
              style={{ maxWidth: 500 }}
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {this.state.subSchool.map((el, index) => (
                <TreeItem nodeId={`${index}`} label={el.Namem}>
                  {el.dep.map((dep) => (
                    <TreeItem
                      nodeId={dep.ID}
                      label={dep.Namem}
                      onClick={() => this.renderCourse(dep.ID, dep.Namem)}
                    ></TreeItem>
                  ))}
                </TreeItem>
              ))}
            </TreeView>
          </div>
        )}
        {this.state.didClick ? (
          <FormControl style={{ width: 400 }}>
            <InputLabel htmlFor="Courses">Courses</InputLabel>
            <Select
              id="Courses"
              multiple
              value={this.state.selectedCourses}
              onChange={this.handleSelect}
            >
              {this.data.map((el, index) => (
                // onClick={() => this.changeCourse(el)}
                <MenuItem key={index} value={index}>
                  <Checkbox
                    checked={this.state.selectedCourses.indexOf(index) > -1}
                  ></Checkbox>
                  {el.nm} - {el.row[0].snx}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <div>
            <FormControl style={{ width: 400 }}>
              <InputLabel htmlFor="Courses">Courses</InputLabel>
              <Select defaultValue="" id="Courses" autoWidth>
                <MenuItem value="">
                  <em>Select Department</em>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
        {this.state.isFull ? (
          <div>
            <Button
              variant="contained"
              style={{ marginTop: 10 }}
              color="primary"
              disabled
            >
              pisda
            </Button>
          </div>
        ) : (
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
              onClick={this.insertCourse}
            >
              Done
            </Button>
          </div>
        )}
      </Rodal>
    );
  }
}
