import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          path: '/home',
          element:<Home/>
        },
        {
          path: '/features',
          element: <Features/>
        },
        {
          path: '/pricing',
          element: <Pricing/>
        },
        {
          path:'/resources',
          element:<Resources/>
        }
      ]
    },
   
  ])
  return <RouterProvider router={routes}/>
}

export default App;
