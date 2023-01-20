import { Route, Routes } from "react-router-dom";

import PrivateRouter from "./PrivateRouter";
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
} from "../pages";

const Router = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<PublicLayout />}>
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
