import React, { Component } from 'react'
import NavigationBar from './navigationBar';

class HomePage extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container">
                    {/* Put chat list here */}
                    <p>hi</p>
                </div>
            </div>
        )
    }

}


export default HomePage;
