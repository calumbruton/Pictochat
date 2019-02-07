import React, { Component } from 'react';

class NavigationBar extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <form className="form-inline">
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </form>
                    <div>
                        <button className = "logout-button">
                            logout
                        </button>
                    </div>
                </div>
            </nav> 
        )
    }

}


export default NavigationBar;