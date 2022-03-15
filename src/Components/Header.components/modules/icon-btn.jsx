import React, { Component } from 'react';
import style from '../Header.module.scss'
class IconBtn extends Component {
    render() {
        const{clss}=this.props;
        return (
            <button className= {`${style["btn"]} ${style["icon-btn"]}`}>
                <span className = {`${style["icon-btn-icon"]}`}>
                <i className={clss}></i>
                </span>
            </button>
        );
    }
}

export default IconBtn;
