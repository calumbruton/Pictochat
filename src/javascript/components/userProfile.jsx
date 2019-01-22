import React, { Component } from 'react';
import ProfilePicture from '../../images/empty-profile-picture.png';


class UserProfile extends Component {

    render() {
        return (
            <div className = "flexbox-container-user-profile">
                <div className = "user-profile-container">
                    <p>John Doe</p>
                    <img src={ProfilePicture} width='350vh'></img>
                </div>
            </div>
        )
    }

}

export default UserProfile;