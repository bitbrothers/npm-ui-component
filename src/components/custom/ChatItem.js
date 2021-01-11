import React from 'react';
import Avatar from './Avatar';

function ChatItem({source, author, date, message}) {
    return (
        <div class="media chat-item">
            <Avatar source={source}/>
            <div class="media-body">
                <div class="chat-item-title">
                <span class="chat-item-author">{author}</span>
                <span>{date}</span>
                </div>
                <div class="chat-item-body">
                {message}
                </div>
            </div>
        </div>
    )
}

export default ChatItem;
