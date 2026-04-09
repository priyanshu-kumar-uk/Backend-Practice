import React, { useEffect } from 'react'
import { users } from '../Hooks/userHook'
import { useSelector } from 'react-redux'

export const Notification = () => {
  let { followRequ,acceptedRequest } = users()

  useEffect(() => {
    followRequ()
  }, [])

  let followReqdata = useSelector((state) => state.users.followRequest)
  let followAccept = useSelector((state) => state.users.followAccept) // Problem-- data save nahi ho pa rha hai

   
  return (
    <section className="insta-panel-card insta-side-panel insta-notification-card">
      <div className="insta-panel-heading insta-notification-heading">
        <div>
          <h2>Notifications</h2>
        </div>
        <span className="insta-notification-count">{followReqdata?.length || 0} requests</span>
      </div>


      <div className="insta-notification-section">
        <div className="insta-notification-section-title">
          <h3>Requested users</h3>
        </div>

          <div className="insta-notification-list">
            {followReqdata.map((elem) => (
              <article className="insta-notification-item" key={elem._id}>
                <div className="insta-notification-user">
                  <img
                    className="insta-notification-avatar"
                    src={elem?.follower?.profileImage}
                    alt={elem?.follower?.username || 'profile'}
                  />
                  <div className="insta-notification-meta">
                    <strong>{elem?.follower?.username || 'Unknown user'}</strong>
                    <p>Requested to follow you</p>
                  </div>
                </div>

                <span className="insta-notification-status" onClick={()=>acceptedRequest({reqUserid:elem._id})}>
                  {elem?.status === 'pending' ? 'Requested' : elem?.status}
                </span>
              </article>
            ))}
          </div>
          
      </div>
    </section>
  )
}
