import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import ForgetPassword from "../pages/ForgetPassword";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '/',
                index: true,
                Component: Home,
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute>
                    <UpdateProfile />
                </PrivateRoute>
            }

        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login,
            },
            {
                path: '/auth/register',
                Component: Register
            },
            {
                path: '/auth/forget-password',
                Component: ForgetPassword
            }

        ]
    },



])