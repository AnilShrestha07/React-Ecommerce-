import {createBrowserRouter, RouterProvider} from "react-router"
import Login from "../pages/auth/login/login"
import Register from "../pages/auth/register/register.page"
import HomePage from "../pages/home/home.page"
import NotFoundPage from "../pages/errors/NotFound.page"
import AdminDashboard from "../pages/dashboard/admin-dashboard.page"
import Dashboard from "../pages/dashboard/dashboard.page"
import BannerPage from "../pages/Banner/banner.oage"
import ForgetPasswordPage from "../pages/forgetpassword/forgetpassword.page"
import { ToastContainer} from 'react-toastify';



const routerConfig = createBrowserRouter([
    {
        path:"/",
        Component: Login
    },
    {
        path:"/register",
        Component: Register,
    },
    {
        path:"/home",
        Component:HomePage
    },
    {
        path:"/forget-password",
        Component: ForgetPasswordPage
    },
    {
        path: "/admin",
        element: <AdminDashboard/>,
        children: [
            {
                path:"",
                Component: Dashboard
            },
            {
                path:"banner/",
                Component: BannerPage
            }
        ]
    },
    {
        path: "*",
        Component:NotFoundPage
    }
])

export default function RouterConfig() {
  return (
    <>
        <ToastContainer theme="colored"/>
        <RouterProvider router={routerConfig}></RouterProvider>

        {/* <BrowserRouter>
            <Routes>
                <Route path="/" Component={Login}></Route>
                <Route path="/register" Component={Register}></Route>
                <Route path="/home" Component={HomePage}></Route>


            </Routes>
        </BrowserRouter> */}
    </>
  )
}
