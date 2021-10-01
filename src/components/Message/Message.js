import React from 'react';
import './Message.scss';

function Message({ messageList }) {
    console.log(messageList);
    return (
        <ul className="list">
            {messageList.map(item => (
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