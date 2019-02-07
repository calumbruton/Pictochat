import React, { Component } from 'react'
import NavigationBar from '../components/navigationBar';
import FriendsList from '../components/friendsList';
import UserProfile from '../components/userProfile';
import ChatBox from '../components/chatBox'

class HomePage extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container">
                    <div className = "flexbox-container">
                           {/* Put chat list here */}
                           <ChatBox />
                           <UserProfile />             
                    </div>
                    <div className = "flexbox-container">
                        <FriendsList/>
                    </div>
                </div>
            </div>
        )
    }

}


export default HomePage;
