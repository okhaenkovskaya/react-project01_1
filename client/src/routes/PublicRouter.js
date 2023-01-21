import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/auth";

const PublicRouter = ({ redirectPath = "/login" }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return <Navigate to={redirectPath} />;
    }

    return <Outlet />;
};

export default PublicRouter;
