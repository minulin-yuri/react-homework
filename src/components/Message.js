import React from 'react';
import './Message.css';

function Message(props) {
    return (
        < div className="message">
            <h4>Вы написали:</h4>
            <span>{props.text}</span>
        </div >
    );
}

export default Message;