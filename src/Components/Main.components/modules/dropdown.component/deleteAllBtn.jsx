import React, { Component } from "react";
import style from "../../Main.module.scss";

class Deleteallbtn extends Component {
  render() {
      const{deleteAllItem,clss,type}=this.props;
    // {{`${style[]`}}
  // {`${style[""]} ${style[``]}`}
    
    return (
      <div className={`${style["dropdown"]} ${clss}`}>
        <button type="button" onClick={e=>{deleteAllItem(type)}}>
          <i className="bi bi-trash"></i>Delete All Activities
        </button>
      </div>
    );
  }
}

export default Deleteallbtn;
