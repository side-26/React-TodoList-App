import React, { Component } from "react";
import BoxHeader from "./box-header";
import Card from "./card";
import style from "../Main.module.scss";

class Box extends Component {
  render() {
    const { name, deleteFu, deleteAllItem, type, moveFu } = this.props;
     // {`${style[]}`}
    return (
      <section className= {`${style["box"]}`}>
        <BoxHeader type={type} deleteAllItem={deleteAllItem} name={name} />
        <div className= {`${style["cards-container"]}`}>
          {this.props.Arr.length === 0 ? (
            <h3 style={{ textAlign: "center" }}>
              No Activity found Add some!!!
            </h3>
          ) : (
            this.props.Arr.map((item) => (
              <Card
                deleteFu={deleteFu}
                id={item.id}
                key={item.id}
                title={item.title}
                desc={item.desc}
                endTime={item.endTime}
                moveFu={moveFu}
                type={type}
                typeName={name}
              />
            ))
          )}
        </div>
      </section>
    );
  }
}

export default Box;
