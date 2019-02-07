import React, { Component } from 'react';
import FriendRow from './friendRow';

class FriendsList extends Component {

    render() {
        return (
            <div className = "friendsList-container">
                <FriendRow />
                <FriendRow />
                <FriendRow />
            </div>
        )
    }

}


export default FriendsList;