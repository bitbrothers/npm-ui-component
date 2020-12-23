import React from 'react';

function ChatItem({source, author, date, message}) {
    return (
        <div class="media chat-item">
            <img alt="..." src={source} class="avatar" />
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
