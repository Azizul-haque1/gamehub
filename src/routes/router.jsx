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
import GameDetails from "../pages/GameDetails";
import NotFoundPage from "../pages/NotFoundPage";
import CommunityPage from "../pages/CommunityPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Support from "../pages/Support";
import AllGames from "../pages/AllGames";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/all-games',
                Component: AllGames
            },
            {
                path: 'about',
                Component: About

            },
            {
                path: '/community',
                Component: CommunityPage

            },
            {
                path: '/contact',
                Component: Contact

            },
            {
                path: '/support',
                Component: Support

            },
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
            },
            {
                path: '/my-profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute>
                    <UpdateProfile />
                </PrivateRoute>
            },
            {
                path: '/game-details/:id',
                element: <GameDetails />

            },


        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [


        ]
    },


    {
        path: '*',
        element: <NotFoundPage />

    }



])