import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { users } from '../../Users/Hooks/userHook'
import {useNavigate} from 'react-router-dom'

const ProfilePanel = () => {
  let data = useSelector((state) => state.auth.user)
  let postsGet = useSelector((state) => state.posts.post)
  let profile = useSelector((state) => state.users.profile)
  let { profileUser } = users()
  let postList = Array.isArray(postsGet) ? postsGet.filter(Boolean) : []

  useEffect(() => {
    profileUser()
  }, [])

  let navigate = useNavigate()

  function followersData(){
     navigate("/followuser")
  }

  function followinguserData(){
     navigate("/followinguser")
  }
  return (
    <section className="insta-profile-shell">
      <section className="insta-panel-card insta-profile-card">
        <div className="insta-profile-hero">
          <img className="insta-profile-avatar" src={data?.profileImage} alt={data?.username || 'profile'} />
          <div className="insta-profile-copy">
            <div className="insta-profile-title-row">
              <h2>{data?.username || 'username'}</h2>
              <button type="button" className="insta-profile-action">Edit profile</button>
            </div>

            <div className="insta-profile-stats">
              <div>
                <strong>{postList.length}</strong>
                <span>Posts</span>
              </div>
              <div onClick={followersData}>
                <strong>{profile?.followerCounts || 0}</strong>
                <span>Followers</span>
              </div>
              <div onClick={followinguserData}>
                <strong >{profile?.followingCounts || 0}</strong>
                <span>Following</span>
              </div>
            </div>

            <div className="insta-profile-details">
              {data?.fullname ? <strong>{data.fullname}</strong> : null}
              {data?.bio ? <p className="insta-profile-bio">{data.bio}</p> : null}
            </div>
          </div>
        </div>

        <div className="insta-profile-tabs">
          <span className="insta-profile-tab insta-profile-tab-active">POSTS</span>
        </div>
      </section>

      <section className="insta-profile-gallery-card">
        {postList.length ? (
          <div className="insta-profile-grid">
            {postList.map((post, index) => {
              let media = Array.isArray(post?.media) ? post.media[0] : null

              return (
                <article className="insta-profile-post" key={post?._id || index}>
                  <div className="insta-profile-post-media">
                    {media?.media_type === 'video' && media?.url ? (
                      <video muted playsInline preload="metadata">
                        <source src={media?.url} />
                      </video>
                    ) : media?.url ? (
                      <img src={media?.url} alt={post?.caption || 'post'} />
                    ) : (
                      <div className="insta-profile-post-fallback">
                        <span>{data?.username?.slice(0, 1) || 'P'}</span>
                      </div>
                    )}
                    <div className="insta-profile-post-overlay">
                      <div>
                        <strong>{Array.isArray(post?.media) ? post.media.length : 0}</strong>
                        <span>{media?.media_type === 'video' ? 'Video' : 'Photo'}</span>
                      </div>
                      {post?.caption ? <p>{post.caption}</p> : null}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className="insta-empty-panel insta-profile-empty">
            <strong>No posts yet</strong>
            <p>Your profile posts will show here.</p>
          </div>
        )}
      </section>
    </section>
  )
}

export default ProfilePanel
