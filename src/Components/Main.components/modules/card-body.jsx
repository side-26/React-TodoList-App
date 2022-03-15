import React, { Component } from "react";
import DescriptionView from "./description-view";
import StatusSpan from "./status-span";
import TimeSpan from "./time-span";
import TitleView from "./title-view";
import style from "../Main.module.scss";
class CardBody extends Component {
  convertTime = () => {
    const date = new Date();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };

  render() {
    const { title, desc, endTime, typeName, type } = this.props;
    return (
      <div className={`${style["card-body"]}`}>
        <div className={`${style["time-container"]}`}>
          <TimeSpan time={this.convertTime()} type="start" />
          <TimeSpan time={endTime} type="end" />
        </div>
        <TitleView typeName={typeName} title={title} />
        <DescriptionView desc={desc} />
        <StatusSpan type={type} typeName={typeName} />
      </div>
    );
  }
}

export default CardBody;
