import React, { Component } from "react";
import style from "../Main.module.scss";

class TimeSpan extends Component {
  
  render() {
    const { type, time } = this.props;
    return <span className= {`${style["time-span"]} ${style[`time-span-${type}`]}`}>{time}</span>;
  }
}

export default TimeSpan;
