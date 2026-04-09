import React, { useEffect } from 'react'
import { users } from '../../Users/Hooks/userHook'
import { useSelector } from 'react-redux'

const Followers = () => {
  let data = useSelector((state) => state.users.followerData)
  let { connectUserFollower } = users()
  let followerList = Array.isArray(data) ? data.filter(Boolean) : []

  useEffect(() => {
    connectUserFollower()
  }, [])

  return (
    <section className="insta-panel-card insta-side-panel insta-follow-card">
      <div className="insta-panel-heading insta-follow-heading">
        <div>
          <h2>Followers</h2>
        </div>
      </div>

      {followerList.length ? (
        <div className="insta-follow-list">
          {followerList.map((item, index) => (
            <article className="insta-follow-item" key={item?._id || index}>
              <div className="insta-follow-user">
                <img
                  className="insta-follow-avatar"
                  src={item?.follower?.profileImage}
                  alt={item?.follower?.username || 'profile'}
                />
                <div className="insta-follow-meta">
                  <strong>{item?.follower?.username || 'User'}</strong>
                </div>
              </div>
              <span className="insta-follow-pill">Following you</span>
            </article>
          ))}
        </div>
      ) : (
        <div className="insta-empty-panel insta-follow-empty">
          <strong>No followers yet</strong>
          <p>Your followers will appear here.</p>
        </div>
      )}
    </section>
  )
}

export default Followers
