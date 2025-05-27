import { Spin } from "antd";
import { lazy, Suspense } from "react"
import {createBrowserRouter, RouterProvider} from "react-router"

const Login = lazy(()=> import("../pages/auth/login/login"));
const Register = lazy(()=> import("../pages/auth/register/register.page"));
const HomePage = lazy(()=> import("../pages/home/home.page"));
const NotFoundPage = lazy(()=> import("../pages/errors/NotFound.page"));
const BannerPage = lazy(()=> import("../pages/Banner/banner.page"));
const ForgetPasswordPage = lazy(()=> import("../pages/forgetpassword/forgetpassword.page"));

import { ToastContainer} from 'react-toastify';
import BannerCreate from "../pages/Banner/banner-create.page";

const AdminLayout = lazy(()=> import("../pages/layout/admin-layout.page"));
const AdminDashboard = lazy(()=> import("../pages/dashboard/admin-dashboard.page"));

const SellerLayout = lazy(()=> import("../pages/layout/seller-layout.page"));



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
        element: <AdminLayout/>,
        children: [
            {
                index:true,
                element:<Suspense fallback={<Spin fullscreen={true}/>}>  <AdminDashboard/> </Suspense>
            },
            {
                path: "banner/create",
                Component: BannerCreate 
            },
           
            {
                path:"banner/",
                Component: BannerPage
            }
        ]
    },
     {
        path: "/seller",
        element: <SellerLayout/>,
        children: [
            {
                index:true,
                element:<Suspense fallback={<Spin fullscreen={true}/>}>  <AdminDashboard/> </Suspense>
            },
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
