import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const getInitial = (value = 'U') => value.slice(0, 1).toUpperCase()

const MediaSlider = ({ media = [], caption }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalItems = media.length


  if (!totalItems) {
    return (
      <div className="insta-post-placeholder">
        <span>Post Preview</span>
      </div>
    )
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1))
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1))
  }

  return (
    <div className="insta-post-media">
      <div
        className="insta-media-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {media.map((item, index) => (
          <div className="insta-media-slide" key={item?._id || item?.url || index}>
            {item?.media_type === 'video' && item?.url ? (
              <video controls preload="metadata">
                <source src={item.url} />
              </video>
            ) : item?.url ? (
              <img src={item.url} alt={caption || 'post'} />
            ) : (
              <div className="insta-post-placeholder">
                <span>Post Preview</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {totalItems > 1 ? (
        <>
          <button type="button" className="insta-media-arrow insta-media-arrow-left" onClick={goPrev}>
            ‹
          </button>
          <button type="button" className="insta-media-arrow insta-media-arrow-right" onClick={goNext}>
            ›
          </button>

          <div className="insta-media-dots">
            {media.map((_, index) => (
              <span
                key={index}
                className={`insta-media-dot ${index === activeIndex ? 'insta-media-dot-active' : ''}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

const PostCard = ({ post }) => {
  const mediaItems = Array.isArray(post?.media) ? post.media.filter(Boolean) : []
  const loginUser = useSelector((state) => state.auth.user)
  const author = post?.author
  const authorName = author?.username || loginUser?.username || 'User'
  const authorImage = author?.profileImage || loginUser?.profileImage

  return (
    <article className="insta-post-card">
      <div className="insta-post-header">
        {authorImage ? (
          <div className="insta-avatar-ring">
            <img
              className="insta-avatar-image"
              src={authorImage}
              alt={authorName}
            />
          </div>
        ) : (
          <div className="insta-avatar-ring">
            <div className="insta-avatar-core">{getInitial(authorName)}</div>
          </div>
        )}

        <div>
          <h3>{authorName}</h3>
          <p>{mediaItems.length > 1 ? `${mediaItems.length} media files` : mediaItems[0]?.media_type === 'video' ? 'Video post' : 'Image post'}</p>
        </div>
      </div>

      <MediaSlider media={mediaItems} caption={post?.caption} />

      <div className="insta-post-body">
        <p className="insta-post-caption">
          <strong>{authorName}</strong> {post?.caption || 'No caption'}
        </p>
        <div className="insta-post-actions">
          <span>Like</span>
          <span>Comment</span>
          <span>Share</span>
        </div>
      </div>
    </article>
  )
}

const PostFeed = () => {
  const postData = useSelector((state) => state.posts.post)
  const feedPosts = Array.isArray(postData) ? postData.filter(Boolean) : []

  if (!feedPosts.length) {
    return (
      <div className="insta-empty-state">
        <h2>Welcome to Instagram</h2>
        <p>When your posts arrive, they will show here in the feed.</p>
      </div>
    )
  }

  return (
    <div className="insta-feed-shell">
      <div className="insta-feed-list">
        {feedPosts.map((post, index) => (
          <PostCard key={post?._id || index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default PostFeed
