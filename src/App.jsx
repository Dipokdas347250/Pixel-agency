import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
 let routing = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    
    ],
  },
]);

  return (
   <>
   <RouterProvider router={routing} />
   
   </>
  )
}

export default App