/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import FriendPicture from '../../images/friend-default-picture.svg';
import TempDoodle from '../../images/temp-doodle.png'


class FriendsList extends Component {

    state = {
        divPressed: false,
    }

    handleClick() {
        this.setState( {divPressed: !this.state.divPressed} )
    }

    render() {
        return (
            <li className = {this.state.divPressed ? "friendRow-container pressed" : "friendRow-container"}
                onClick = {() => this.handleClick()}
            >
                <div className = "friend-info">
                    <img src = {FriendPicture} width = "50%" alt = "image of friend"/>
                    <h3 className = "friend-name">Bill Smith</h3>
                </div>
                <div className = "chat-preview">
                    <p className = "text-preview">Some paragraph from the chat and a preview of the picture or something like that</p>
                    <div className = "picture-preview">
                        <img src = {TempDoodle} width = "50%" height = "90%" alt = "Preview of friends picture"></img>
                    </div>
                </div>
            </li>
        )
    }

}


export default FriendsList;