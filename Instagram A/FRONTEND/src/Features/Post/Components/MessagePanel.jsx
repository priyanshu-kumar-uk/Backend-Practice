import React from 'react'

const MessagePanel = () => {
  return (
    <section className="insta-panel-card insta-empty-panel">
      <div className="insta-panel-heading">
        <h2>Messages</h2>
        <p>UI preview</p>
      </div>
      <div className="insta-message-list">
        <div className="insta-message-item">
          <strong>... </strong>
          <span> message...</span>
        </div>
      </div>
    </section>
  )
}

export default MessagePanel
