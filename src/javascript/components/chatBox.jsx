import React, { Component } from 'react';
import DrawableCanvas from './drawableCanvas.jsx'
import CircularColor from 'react-circular-color';

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
      }

      state={
          currentColor: "black",
      }

      handleClearOnClick() {
          this.child.current.resetCanvas();
      }

      handleColorChange(color) {
        console.log(color);
        this.setState( {currentColor: color} )
      }

    render() {
        return (
            <div className = "chatbox-container">
                <div className = "canvas-container">
                    <DrawableCanvas ref={this.child} color={this.state.currentColor}/>
                </div>
                <div className = "buttons-container">
                    <button className = "clear-canvas-button" onClick={() => this.handleClearOnClick()}>Clear</button>
                    <button className = "send-button">Send</button>
                    <div className="center-button"><CircularColor size={50} onChange={(color) => this.handleColorChange(color)}/></div>
                </div>
            </div>
        )
    }

}


export default ChatBox;
