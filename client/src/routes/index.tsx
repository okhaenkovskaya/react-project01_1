import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import CheckUserAuth from "./CheckUserAuth";
import { PrivateLayout, PublicLayout } from "../layout";
import { AuthProvider } from "../context/auth";

import {
    Home,
    Register,
    Login,
    Tasks,
    Dashboard,
    Archive,
    Post,
    Contact,
    NotFound,
    Posts,
    ProfilePage,
    PrivacyPolicy,
    UserList,
} from "../pages";

type TitleRecord = Record<string, string>;

const titles: TitleRecord = {
    "/": "Home",
    "/Contact": "Contact",
    "/dashboard": "Dashboard",
    "/login": "Login",
    "/Register": "Register",
    "/privacy-policy": "PrivacyPolicy",
};

const Router = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = titles[location.pathname] ?? "My super app";
    }, [location]);

    return (
        <AuthProvider>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route element={<PublicRouter />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/posts/:postId" element={<Post />} />
                    <Route
                        path="/archive/:filter/:param"
                        element={<Archive />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<PrivateRouter />}>
                    <Route element={<PrivateLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/dashboard/tasks" element={<Tasks />} />
                        <Route path="/dashboard/posts" element={<Posts />} />
                        <Route path="/dashboard/posts" element={<Posts />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/user-list" element={<UserList />} />
                    </Route>
                </Route>

                <Route element={<CheckUserAuth />}>
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default Router;
