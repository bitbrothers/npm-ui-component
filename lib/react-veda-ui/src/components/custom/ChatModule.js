import React from 'react'
import ChatItem from './ChatItem'

function ChatModule({source,message}) {
    return (
        <div className="chat-module">
            <div className="chat-module-top">
                <form>
                    <div className="input-group input-group-round">
                        <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="material-icons">S</i>
                        </span>
                        </div>
                        <input type="search" className="form-control" placeholder="Search chat" aria-label="Search Chat" />
                    </div>
                </form>
                <div className="chat-module-body">
                    <ChatItem 
                    source={source}
                    message={message}/>
                </div>
            </div>
            <div className="chat-module-bottom">
                <form className="chat-form">
                <textarea className="form-control" placeholder="Type message" rows="1"></textarea>
                <div className="chat-form-buttons">
                    <button type="button" className="btn btn-link">
                    <i className="material-icons">tag_faces</i>
                    </button>
                    <div className="custom-file custom-file-naked">
                    <input type="file" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" for="customFile">
                        <i className="material-icons">attach_file</i>
                    </label>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ChatModule
