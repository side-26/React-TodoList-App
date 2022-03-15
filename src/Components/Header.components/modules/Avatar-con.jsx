import React, { Component } from 'react';
import src from '../../../Assets/img/avatar.png';
import style from '../Header.module.scss'
class AvatarCon extends Component {
    render() {
        return (
            <figure className= {`${style['avatar-container']}`}>
                <img src={src} alt="avatar" className= {`${style['avatar-img']}`} />
            </figure>
        );
    }
}

export default AvatarCon;
