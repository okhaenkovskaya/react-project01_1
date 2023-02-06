import { useContext } from "react";
import { Navigate, Outlet } from "react-router";

import { AuthContext } from "../context/auth";

const PrivateRouter = ({ redirectPath = "/login" }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to={redirectPath} />;
    }
    return <Outlet />;
};

export default PrivateRouter;
