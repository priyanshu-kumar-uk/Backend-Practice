import React from 'react'
import {RouterProvider} from 'react-router-dom'
import {router} from './auth.router'
import {Provider} from 'react-redux'
import { store } from '../Redux/app.store'
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </div>
  )
}

export default App