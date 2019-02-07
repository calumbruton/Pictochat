import React, { Component } from 'react';
import ProfilePicture from '../../images/empty-profile-picture.svg';


class UserProfile extends Component {

    render() {
        return (
            <div className = "flexbox-container-user-profile">
                <div className = "user-profile-container">
                    <h1 className = "user-name">John Doe</h1>
                    <img src={ProfilePicture} width='250vh'></img>
                </div>
            </div>
        )
    }

}

export default UserProfile;