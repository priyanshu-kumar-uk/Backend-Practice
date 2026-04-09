import React, { useEffect } from 'react'
import { users } from '../../Users/Hooks/userHook'
import { useSelector } from 'react-redux'

const Following = () => {
  let data = useSelector((state) => state.users.followingData)
  let { connectUser } = users()
  let followingList = Array.isArray(data) ? data.filter(Boolean) : []

  useEffect(() => {
    connectUser()
  }, [])

  return (
    <section className="insta-panel-card insta-side-panel insta-follow-card">
      <div className="insta-panel-heading insta-follow-heading">
        <div>
          <h2>Following</h2>
        </div>
      </div>

      {followingList.length ? (
        <div className="insta-follow-list">
          {followingList.map((item, index) => (
            <article className="insta-follow-item" key={item?._id || index}>
              <div className="insta-follow-user">
                <img
                  className="insta-follow-avatar"
                  src={item?.followee?.profileImage}
                  alt={item?.followee?.username || 'profile'}
                />
                <div className="insta-follow-meta">
                  <strong>{item?.followee?.username || 'User'}</strong>
                </div>
              </div>
              <span className="insta-follow-pill insta-follow-pill-secondary">Following</span>
            </article>
          ))}
        </div>
      ) : (
        <div className="insta-empty-panel insta-follow-empty">
          <strong>No following yet</strong>
          <p>Accounts you follow will appear here.</p>
        </div>
      )}
    </section>
  )
}

export default Following
