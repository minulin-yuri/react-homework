import React from 'react';
import './Message.css';

function Message(props) {
    return (
        <ul className="list">
            {props.messageList.map(item => (
                <li key={item.id} className={item.author}>
                    <div className="message">
                        <h3>{item.author}</h3>
                        <p>{item.text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Message;