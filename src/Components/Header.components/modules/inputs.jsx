import React, { Component } from 'react';
import style from '../Header.module.scss'
class Inputs extends Component {
    render() {
        const{laName,placeHolder,type,value,onchange}=this.props
        // console.log(value);
        return (
            <div className= {`${style["input-container"]} ${style[`input-container-${laName}`]}`}>
                <input  className= {`${style["input"]} ${style[`form-input-${laName}`]}`} onChange={e=>{onchange(e,laName)}} type={type} placeholder={placeHolder} value={value} />
            </div>
        );
    }
}

export default Inputs;
