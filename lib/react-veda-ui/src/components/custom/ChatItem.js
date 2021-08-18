import React from 'react';
import Avatar from './Avatar';

function ChatItem({source, author, date, message}) {
    return (
        <div className="media chat-item">
            <Avatar source={source}/>
            <div className="media-body">
                <div className="chat-item-title">
                <span className="chat-item-author">{author}</span>
                <span>{date}</span>
                </div>
                <div className="chat-item-body">
                {message}
                </div>
            </div>
        </div>
    )
}

export default ChatItem;
