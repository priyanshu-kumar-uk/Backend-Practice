import React from 'react'
import StoriesBar from '../Components/StoriesBar.jsx'
import PostFeed from '../Components/PostFeed.jsx'

const FeedPage = () => {
  return (
    <section className="insta-home-panel">
      <StoriesBar />
      <PostFeed />
    </section>
  )
}

export default FeedPage
