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

const titles = {
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
                    <Route element={<PublicRouter />}>
                        <Route index element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/posts/:postId" element={<Post />} />
                        <Route
                            exact
                            path="/archive/:filter/:param"
                            element={<Archive />}
                        />
                        <Route exact path="*" element={<NotFound />} />
                    </Route>
                </Route>
                <Route element={<PrivateRouter />}>
                    <Route element={<PrivateLayout />}>
                        <Route
                            exact
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            exact
                            path="/dashboard/tasks"
                            element={<Tasks />}
                        />
                        <Route
                            exact
                            path="/dashboard/posts"
                            element={<Posts />}
                        />
                        <Route
                            exact
                            path="/dashboard/posts"
                            element={<Posts />}
                        />
                        <Route
                            exact
                            path="/profile"
                            element={<ProfilePage />}
                        />
                        <Route exact path="/user-list" element={<UserList />} />
                    </Route>
                </Route>

                <Route element={<CheckUserAuth />}>
                    <Route
                        exact
                        path="/privacy-policy"
                        element={<PrivacyPolicy />}
                    />
                </Route>
            </Routes>
        </AuthProvider>
    );
};

export default Router;
