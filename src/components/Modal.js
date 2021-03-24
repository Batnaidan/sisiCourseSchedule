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

import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import RenderCourse from './RenderCourse';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      subSchool: null,
      didClick: false,
      courses: null,
      selectedCourses: [],
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
  insertCourse = (course) => {
    course.id = course.row[0].snx;
    course.cre = course.row[0].cre;
    this.state.selectedCourses.push(course);
    console.log(this.state.selectedCourses);
  };

  renderCourse = async (depId) => {
    let data = (await api.getAllCourses(depId)).data.data;
    this.setState({
      didClick: false,
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
          <div>
            <FormControl style={{ width: 400 }}>
              <InputLabel htmlFor="Courses">Courses</InputLabel>
              <Select
                defaultValue=""
                id="Courses"
                // multiple
                // value={this.state.selectedCourses}
              >
                {this.state.courses.map((el, index) => (
                  <MenuItem value={index} onClick={() => this.insertCourse(el)}>
                    {el.nm} - {el.row[0].snx}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/*  */}
            {/* <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </div>
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
        <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
          Done
        </Button>
      </Rodal>
    );
  }
}
