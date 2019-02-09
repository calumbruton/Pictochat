import React, { Component } from 'react'
import NavigationBar from '../components/navigationBar';
import LoginPanel from '../components/loginPanel';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container">
                    <div className = "flexbox-container">
                           {/* Put chat list here */}
                           <img></img>           
                    </div>
                    <div className = "flexbox-container">
                        <LoginPanel/>
                    </div>
                </div>
            </div>
        )
    }

}


export default LandingPage;
