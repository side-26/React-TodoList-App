import React, { Component } from "react";
import style from "../Main.module.scss";

class DescriptionView extends Component {
  
  render() {
    return (
      <div className={`${style["desc-coantainer"]}`}>
        <p children={this.props.desc}></p>
      </div>
    );
  }
}

export default DescriptionView;
