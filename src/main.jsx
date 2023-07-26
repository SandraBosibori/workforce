import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/main/App'
import About from '../src/components/about/index'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Help from './components/help'

const routes= createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/about',
    element: <About/>
  },
  {
    path:'/help',
    element:<Help/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
