import React, { Component } from "react";
import Box from "./modules/box";
import style from "./Main.module.scss";
class Main extends Component {
  filter = (mainArr, num) => {
    return mainArr.filter((activity) => {
      return activity.type === num;
    });
  };
  render() {
    const { mainArr, deleteFu, deleteAllItem, moveFu } = this.props;
    return (
      <main className= {`${style["main"]}`}>
        <Box
          moveFu={moveFu}
          deleteAllItem={deleteAllItem}
          type={0}
          deleteFu={deleteFu}
          Arr={this.filter(mainArr.activities, 0)}
          name="tasks"
        />
        <Box
          moveFu={moveFu}
          deleteAllItem={deleteAllItem}
          type={1}
          deleteFu={deleteFu}
          Arr={this.filter(mainArr.activities, 1)}
          name="doing"
        />
        <Box
          moveFu={moveFu}
          deleteAllItem={deleteAllItem}
          type={2}
          deleteFu={deleteFu}
          Arr={this.filter(mainArr.activities, 2)}
          name="done"
        />
      </main>
    );
  }
}

export default Main;
