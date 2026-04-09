import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../../Auth/Hooks/auth-hook.js'
import { posts } from '../Hooks/postHook.js'

const navItems = [
  { to: '/home', label: 'Home', shortLabel: 'H' },
  { to: '/search', label: 'Search', shortLabel: 'S' },
  { to: '/notification', label: 'Notification', shortLabel: 'N' },
  { to: '/createpost', label: 'CreatePost', shortLabel: 'C' },
  { to: '/message', label: 'Message', shortLabel: 'M' },
  { to: '/profile', label: 'Profile', shortLabel: 'P' },
]

const Home = () => {
  const { getuser } = auth()
  const { getPosts } = posts()
  const data = useSelector((state) => state.auth.user)

  useEffect(() => {
    getuser()
    getPosts()
  }, [])

  return (
    <main className="insta-layout">
      <aside className="insta-sidebar">
        <div className="insta-brand">Instagram</div>

        <nav className="insta-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `insta-nav-item ${isActive ? 'insta-nav-item-active' : ''}`}
            >
              <span className="insta-nav-icon">{item.shortLabel}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="insta-sidebar-profile">
          <img className="insta-sidebar-avatar" src={data?.profileImage} alt="profile" />
          <div>
            <strong>{data?.username}</strong>
            <p>My profile</p>
          </div>
        </div>
      </aside>

      <section className="insta-main-content">
        <Outlet />
      </section>
    </main>
  )
}

export default Home
