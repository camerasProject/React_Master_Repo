import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Navbar from './components/Navbar'
import Java from './components/children/Java'
import Python from './components/children/Python'
import Mern from './components/children/Mern'
import Student from './components/Student'
const Sixth = () => {
    const routes= createBrowserRouter([
        {
            path:"/",
            element:<>
            <Navbar/>
            <Home/>
            </>
        },
        {
            path:"/about",
            element:<>
            <Navbar/>
            <About/>
            </>
        },
        {
            path:"/service",
            element:<>
            <Navbar/>
            <Services/>
            </>,
            children:[
                {
                    path:"java",
                    element:<Java/>
                },
                {
                    path:"python",
                    element:<Python/>
                },
                {
                    path:"mern",
                    element:<Mern/>
                }
            ]
        },
        {
            path:"/student/:id", // dynamic routing,
            element:<Student/>
        },
        {
            path:"/contact",
            element:<>
            <Navbar/>
            <Contact/>
            </>
        },
        {
            path:"*",
            element:<ErrorPage/>
        }
    ])
  return (
    <div>
        {/* Routing : react-router-dom*/}
        <RouterProvider router={routes}/>
    </div>
  )
}

export default Sixth
