import React, { Component } from 'react';
import DrawableCanvas from './drawableCanvas.jsx'

class ChatBox extends Component {

    render() {
        return (
            <div className = "chatbox-container">
                <div className = "canvas-container">
                    <DrawableCanvas />
                </div>
                <div className = "buttons-container">
                    <button className = "clear-canvas-button">Clear</button>
                    <button className = "send-button">Send</button>
                </div>
            </div>
        )
    }

}


export default ChatBox;
