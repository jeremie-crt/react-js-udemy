import React from "react";

const Message = ({ username, message }) => (
    <p className='user-message'>
        {message}
    </p>
)

export default Message