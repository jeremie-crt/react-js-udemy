import React from "react";

//Returns the message content
const Message = ({ username, message, isUser }) => {

    if(isUser(username)) {
        return (
            <p className='user-message'>
                <span style={{padding: '3px'}}>{message}</span>
            </p>
        )
    } else {
        return (
            <p className='not-user-message'>
                <strong>{username}: <br/></strong>{message}
            </p>
        )
    }
}


export default Message