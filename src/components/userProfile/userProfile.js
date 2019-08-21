import React from "react";
import "./style.css";

export default class UserProfile extends React.Component {
    render(){
        return(
            <div className = "wrapper">
                <p>
                    <Profile/>
                    userName:
                    <span> 'default'</span>
                </p>

            </div>
        )
    }
}

function Profile(props){
    let testUser = localStorage.getItem('currentUser');
    console.log(testUser);
    return(
<p> profile function rendered</p>
    )
}