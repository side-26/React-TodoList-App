import React, { Component } from "react";
import Inputs from "./inputs";
import style from '../Header.module.scss'
class Form extends Component {
  // let {stateValues}=this.props;
  state = {
    inputs: [
      {
        type: "text",
        placeholder: "enter your activity...",
        lable: "title",
        onchange: this.props.changing,
      },
      {
        type: "date",
        placeholder: "enter your deadline...",
        lable: "endTime",
        onchange: this.props.changing,
      },
      {
        type: "text",
        placeholder: "enter activity's description ...",
        lable: "desc",
        onchange: this.props.changing,
      },
    ],
  };
  render() {
    // console.log(this.props.stateValues);
    return (
      <form className= {`${style["form"]}`}>
        {this.state.inputs.map((input,index) => (
          <Inputs
          key={index}
            laName={input.lable}
            placeHolder={input.placeholder}
            type={input.type}
            value={this.props.stateValues[input.lable]}
            onchange={input.onchange}
          />
        ))}
        <button
          className= {`${style["btn"]} ${style["btn-submit"]}`}
          onClick={(e) => {
            this.props.addPersonFu(e);
          }}
          type="submit"
        >
          add
        </button>
      </form>
    );
  }
}

export default Form;
