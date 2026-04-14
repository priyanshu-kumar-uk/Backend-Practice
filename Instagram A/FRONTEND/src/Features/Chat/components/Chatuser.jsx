import React from 'react'
import {chat} from '../Hooks/chat.hook.js'
const Chatuser = ({ users = [] }) => {

  let {currentUserId} = chat()

  function chatuserId(userId){
      currentUserId(userId)
  }
  return (
    <aside className="chat-panel chat-panel-right">
      <div className="chat-users-heading">
        <div>
          <h2>Messages</h2>
        </div>
      </div>

      <div className="chat-user-list">
        {users.length ? (
          users.map((user) => (
            <article className="chat-user-card" key={user?._id || user?.username} onClick={()=>chatuserId(user._id)}>
              {user?.profileImage ? (
                <img className="chat-avatar" src={user.profileImage} alt={user?.username || 'profile'} />
              ) : (
                <span className="chat-avatar chat-avatar-fallback">
                  {(user?.username || 'U').slice(0, 1).toUpperCase()}
                </span>
              )}

              <div className="chat-user-copy">
                <strong>{user?.username || 'Unknown user'}</strong>
              </div>

            </article>
          ))
        ) : (
          <div className="chat-users-empty">
            <strong>No users yet</strong>
            <p>Your chat users will show here.</p>
          </div>
        )}
      </div>
    </aside>
  )
}

export default Chatuser
