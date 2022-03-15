import React, { Component } from "react";
import CardBody from "./card-body";
import CardFooter from "./card-footer";
import style from "../Main.module.scss";

class Card extends Component {
  render() {
    const { title, desc, endTime, id, deleteFu, moveFu, type, typeName } =
      this.props;
    return (
      <article className={`${style["card"]}`}>
        <div className={`${style["close-btn-contianer"]}`}>
          <button
            className={`${style["btn"]} ${style["btn-close"]}`}
            onClick={(e) => {
              deleteFu(id);
            }}
            type="button"
          >
            <span>
              <i className="bi bi-x-circle"></i>
            </span>
          </button>
        </div>
        <CardBody
          type={type}
          typeName={typeName}
          title={title}
          desc={desc}
          endTime={endTime}
        />
        <CardFooter type={type} id={id} moveFu={moveFu} />
      </article>
    );
  }
}

export default Card;
