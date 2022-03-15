import React, { Component } from "react";
import style from  "./Header.module.scss";
import AvatarCon from "./modules/Avatar-con";
import Form from "./modules/form";
import IconBtn from "./modules/icon-btn";
class Header extends Component {
  render() {
    const{addPersonFu,stateValues}=this.props;
    return (
      <header className={`${style['main-header']}`}>
        <nav className={`${style['navbar']}`}>
          <div className={`${style['navbar-right']}`}>
            <IconBtn clss="bi bi-bell" />
            <IconBtn clss="bi bi-info-circle" />
            <IconBtn clss="bi bi-plus-lg" />
            <AvatarCon />
          </div>
          <div className={`${style['navbar-left']}`}>
            <IconBtn clss="bi bi-house-door" />
          </div>
        </nav>
        <section className={`${style["form-container"]}`}>
          <div className= {`${style["form-header"]}`}>
            <h1>add your team's project</h1>
            <p className={`${style["form-header-des"]}`}>
              add tasks , work on it , enjoy it.
            </p>
          </div>
          <Form changing={this.props.changing} stateValues={stateValues} addPersonFu={addPersonFu} />
        </section>
      </header>
    );
  }
}

export default Header;
