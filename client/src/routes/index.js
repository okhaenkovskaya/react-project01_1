import { Route, Routes } from "react-router-dom";

import { PrivateLayout, PublicLayout } from "../layout";

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
    BootstrapPage,
} from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route exact path="/bootstrap" element={<BootstrapPage />} />
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
            <Route element={<PrivateLayout />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/dashboard/tasks" element={<Tasks />} />
                <Route exact path="/dashboard/posts" element={<Posts />} />
            </Route>
        </Routes>
    );
};

export default Router;
