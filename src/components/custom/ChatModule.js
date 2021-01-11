import React from 'react'
import ChatItem from './ChatItem'

function ChatModule({source,message}) {
    return (
        <div class="chat-module">
            <div class="chat-module-top">
                <form>
                    <div class="input-group input-group-round">
                        <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="material-icons">S</i>
                        </span>
                        </div>
                        <input type="search" class="form-control" placeholder="Search chat" aria-label="Search Chat" />
                    </div>
                </form>
                <div class="chat-module-body">
                    <ChatItem 
                    source={source}
                    message={message}/>
                </div>
            </div>
            <div class="chat-module-bottom">
                <form class="chat-form">
                <textarea class="form-control" placeholder="Type message" rows="1"></textarea>
                <div class="chat-form-buttons">
                    <button type="button" class="btn btn-link">
                    <i class="material-icons">tag_faces</i>
                    </button>
                    <div class="custom-file custom-file-naked">
                    <input type="file" class="custom-file-input" id="customFile" />
                    <label class="custom-file-label" for="customFile">
                        <i class="material-icons">attach_file</i>
                    </label>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ChatModule
