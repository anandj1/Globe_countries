import {createRoot} from 'react-dom/client'
import App from './App'
import {   createBrowserRouter,   RouterProvider,} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Err from './components/Err';
import CountryDetail from './components/CountryDetail'




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Err/>,
     
    
    children:[
        {
            path: "/",
            element: <Home/>,
            
          },
        {
        path: "/contact",
        element: <Contact/>,
        },
        {
          path: "/:country",
          element: <CountryDetail/>
          },
      
    ]
    },
    ],
  );
  
const root = createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={router} />)