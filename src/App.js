import React, { Component } from "react";
import { Fragment } from "react";
import Header from "./Components/Header.components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Assets/style/App.scss";
import Main from "./Components/Main.components/Main";
// import Footer from './Components/Footer.components/Footer.jsx';

class App extends Component {
  state = {
    title: "",
    desc: "",
    endTime: "",
    activities: [],
  };
  componentDidMount() {
    if(localStorage.getItem("activities")!==null)
    this.setState({
      activities: JSON.parse(localStorage.getItem("activities")),
      title: "",
      desc: "",
      endTime: "",
    });
  }
  componentDidUpdate(prevProps, preState) {
    localStorage.setItem("activities", JSON.stringify(this.state.activities));
  }
  deleteAllItem = (typeNo) => {
    let shallowState = [...this.state.activities];
    const filterdArr = shallowState.filter((item) => item.type === typeNo);
    filterdArr.forEach((item) => {
      const index = shallowState.indexOf(item);
      console.log(item);
      shallowState.splice(index, 1);
    });
    this.setState({
      activities: shallowState,
    });
  };
  deleteActivity = (id) => {
    let shallowState = [...this.state.activities];
    shallowState = shallowState.filter((item) => item.id !== id);
    this.setState({
      activities: shallowState,
    });
  };
  addActivity = (e) => {
    e.preventDefault();
    const { activities, title, desc, endTime } = this.state;
    this.setState({
      activities: [
        ...activities,
        {
          id: Date.now(),
          title: title,
          desc: desc,
          endTime: endTime,
          startTime: Date.now(),
          type: 0,
        },
      ],
      title: "",
      desc: "",
      endTime: "",
    });
  };
  changing = (e, selectedItem) => {
    this.setState((prevSt) => {
      return { [selectedItem]: e.target.value };
    });
  };
  move = (id, typeNo, shiftNo) => {
    let shallowState = [...this.state.activities];
    let slectedItem = shallowState.find((item) => {
      return item.id === id && item.type === typeNo;
    });
    const index = shallowState.indexOf(slectedItem);
    slectedItem.type = shiftNo;
    shallowState[index] = slectedItem;
    console.log(shallowState);
    this.setState({ activities: shallowState });
  };

  render() {
    // console.log(this.state.activities);
    return (
      <Fragment>
        <Header
          changing={this.changing}
          stateValues={this.state}
          addPersonFu={this.addActivity}
          state={this.state}
        />
        <Main
          deleteAllItem={this.deleteAllItem}
          deleteFu={this.deleteActivity}
          mainArr={this.state}
          moveFu={this.move}
        />
        {/* <Footer/> */}
      </Fragment>
    );
  }
}

export default App;
