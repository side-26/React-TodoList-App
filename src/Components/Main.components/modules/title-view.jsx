import React, { Component } from 'react';
import style from "../Main.module.scss";

class TitleView extends Component {
    
    render() {
        const {typeName,title}=this.props
        return (
            <div className= {`${style["title-container"]} ${style[`${typeName==="done"?"done":""}`]}`} >
                <strong >
                    {title}
                </strong>
                
            </div>
        );
    }
}

export default TitleView;
