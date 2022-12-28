import {Route, Routes} from "react-router-dom";

import {PrivateLayout, PublicLayout} from "../layout";
import HomePage from "../pages/Home";
import PostPage from "../pages/PostSingle";
import NotFound from "../pages/NotFound";
import ArchivePage from "../pages/Archive";
import ContactPage from "../pages/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import Tasks from "../pages/Tasks";
import Posts from "../pages/Posts";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";


const Router = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage/>} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/posts/:postId" element={<PostPage />} />
        <Route exact path="/archive/:filter/:param" element={<ArchivePage />} />
        <Route exact path="*" element={<NotFound/>}/>
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
