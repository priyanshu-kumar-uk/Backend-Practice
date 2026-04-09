import { Navigate, createBrowserRouter } from 'react-router-dom'
import Login from '../Features/Auth/Pages/Login'
import Register from '../Features/Auth/Pages/Register'
import Home from '../Features/Post/Pages/Home'
import FeedPage from '../Features/Post/Pages/FeedPage'
import CreatePostPage from '../Features/Post/Pages/CreatePostPage'
import MessagePage from '../Features/Post/Pages/MessagePage'
import ProfilePage from '../Features/Post/Pages/ProfilePage'
import SearchPage from '../Features/Users/Pages/SearchPage'
import { Notification } from '../Features/Users/Pages/Notification'
import Following from '../Features/Post/Components/Following'
import Followers from '../Features/Post/Components/Followers'

export let router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'home',
        element: <FeedPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'createpost',
        element: <CreatePostPage />,
      },
      {
        path: 'message',
        element: <MessagePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },{
        path:'notification',
        element: <Notification/>
      },{
        path:"followuser",
        element: <Followers/>
      },{
        path:"followinguser",
        element:<Following/>
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]
)
