import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Login from "./components/layouts/Login"
import Home from "./components/layouts/Home"
import User from "./components/layouts/User"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path:"/home",
    element:<Home />
  },
  {
    path:"/user",
    element:<User />
  }
])
function App() {
 

  return (
    <>
       <RouterProvider router={router} />
   
    </>
  )
}

export default App
