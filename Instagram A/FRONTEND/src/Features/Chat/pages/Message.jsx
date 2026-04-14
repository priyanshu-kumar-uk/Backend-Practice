import React, { useRef } from 'react'
import {chat} from '../Hooks/chat.hook'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'
import Chatuser from '../components/Chatuser'
import {io} from 'socket.io-client'
const Message = () => {

  const URL = "http://localhost:3000"

   let{chatUsers} = chat()
   let chatUser =   useSelector(state=> state.chats.chatUser)
   let chatUserList = Object.values(chatUser || {})
   let chatuserId =  useSelector(state => state.chats.chatUserId )
   let activeUser = chatUser[chatuserId] || chatUserList[0]
   let displayName = activeUser?.username || 'Select a conversation'
   let profileImage = activeUser?.profileImage
  
   let socketRef = useRef(null)

  //   function chatEmit () {
  //     socketRef.current.emit("send-msg",{
       
  //     })
  //  }

    useEffect(()=>{
      
      const socket = io(URL,
        {withCredentials:true}
      )
      socketRef.current = socket

      socket.on("connect",(socket)=>{
        console.log("Connected to socket",socket)
      })

      socket.on("connect_error",(error)=>{
        console.log(error)
      })

      chatUsers()
    return ()=>{
      socket.disconnect("disconnect",()=>{
        console.log("Disconnected user")
      }),
      socket.current = null  
    }

       
    },[])

  return (
    <main className="chat-page-shell">
      <section className="chat-panel chat-panel-left">
        {chatuserId ? (
          <>
            <header className="chat-thread-header">
              <div className="chat-thread-person">
                {profileImage ? (
                  <img className="chat-avatar" src={profileImage} alt={displayName} />
                ) : (
                  <span className="chat-avatar chat-avatar-fallback">
                    {displayName.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <div>
                  <h2>{displayName}</h2>
                </div>
              </div>
            </header>

            <form className="chat-compose">
              <input type="text" placeholder="Message..." />
              <button type="button">Send</button>
            </form>
          </>
        ) : (
          <div className="chat-select-state">
            <div className="chat-select-icon">Chat</div>
            <h2>Your messages</h2>
            <p>Select a user to open the chat.</p>
          </div>
        )}
      </section>

      <Chatuser users={chatUserList} />
    </main>
  )
}

export default Message
