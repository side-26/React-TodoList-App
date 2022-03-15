import React, { Component } from "react";
import style from "../Main.module.scss";

class StatusSpan extends Component {
  render() {
    const { typeName, type } = this.props;
    return (
      <section className={`${style["progress-conianer"]}`}>
        <div
          className={`${style["progress"]}`}
          style={{ width: `calc(50% * ${type})` }}
        ></div>
        <div className={`${style["circle"]} ${style[`active`]}`}>
          <i className={`${style["icon"]} bi bi-check-circle-fill`}></i>
        </div>
        <div
          className={`${style["circle"]} ${
            style[
              `${typeName === "done" || typeName === "doing" ? "active" : ""}`
            ]
          }`}
        >
          <i
            className={`${style["icon"]} ${`${
              typeName === "done" || typeName === "doing"
                ? "bi bi-check-circle-fill"
                : ""
            }`}`}
          ></i>
        </div>
        <div
          className={`${style["circle"]} ${
            style[`${typeName === "done" ? "active" : ""}`]
          }`}
        >
          <i
            className={`${style["icon"]} ${`${
              typeName === "done" ? "bi bi-check-circle-fill" : ""
            }`}`}
          ></i>
        </div>
      </section>
    );
  }
}

export default StatusSpan;
