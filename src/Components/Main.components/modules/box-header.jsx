import React, { Component } from "react";
import Deleteallbtn from "./dropdown.component/deleteAllBtn";
import style from "../Main.module.scss";

class BoxHeader extends Component {
  state={
    isShow:false,
  }
  showOrHide=()=>{
    this.setState({isShow:!this.state.isShow})
  }
  render() {
    // {{`${style[]`}}
  // {`${style[""]} ${style[``]}`}
    const{type,name,deleteAllItem}=this.props  
    return (
      <div className={`${style["box-header"]}`} >
        <h3>{name}</h3>
        <span onClick={e=>this.showOrHide()}>
          <i className="bi bi-three-dots-vertical"></i>
        </span>
        <Deleteallbtn type={type} deleteAllItem={deleteAllItem} clss={`${!this.state.isShow?`${style["hide"]}`:""}`} />
      </div>
    );
  }
}

export default BoxHeader;
