import React, { Component } from "react";
import style from "./Footer.module.scss";
class Footer extends Component {
  render() {
    //{`${style[]}`}
    return (
      <footer className={`${style["footer"]}`}>
        <div class={`${style["circle-wrap"]}`}>
          <div class={`${style["circle"]}`}>
            <div class= {`${style["mask half"]}`}>
              <div class= {`${style["fill"]}`}></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
