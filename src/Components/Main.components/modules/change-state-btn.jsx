import React, { Component } from "react";
import style from "../Main.module.scss";

class ChangeStateBtn extends Component {
  render() {
    const { clss, id, moveFu, Id, type, val } = this.props;

    return (
      <button
        onClick={(e) => moveFu(Id, type, val)}
        className={`${style["btn"]} ${style[`btn-change-${id}`]}`}
      >
        <span>
          <i className={clss}></i>
        </span>
      </button>
    );
  }
}

export default ChangeStateBtn;
