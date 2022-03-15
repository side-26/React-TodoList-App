import React, { Component } from "react";
import ChangeStateBtn from "./change-state-btn";
import style from "../Main.module.scss";

class CardFooter extends Component {
  render() {
    const { type, id, moveFu } = this.props;
    console.log(type);
    return (
      <div className={`${style["btn-container"]}`}>
        <ChangeStateBtn
          val={0}
          type={type}
          Id={id}
          moveFu={moveFu}
          id="tasks"
          clss="bi bi-folder2-open"
        />
        <ChangeStateBtn
          val={1}
          type={type}
          Id={id}
          moveFu={moveFu}
          id="doing"
          clss="bi bi-alarm"
        />
        <ChangeStateBtn
          val={2}
          type={type}
          Id={id}
          moveFu={moveFu}
          id="done"
          clss="bi bi-list-check"
        />
      </div>
    );
  }
}

export default CardFooter;
