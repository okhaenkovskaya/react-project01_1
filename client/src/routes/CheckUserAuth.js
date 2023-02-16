import React, { useContext } from "react";
import { Outlet } from "react-router";

import { AuthContext } from "../context/auth";
import PublicLayout from "../layout/PublicLayout";
import PrivateLayout from "../layout/PrivateLayout";

const CheckUserAuth = () => {
    const { user } = useContext(AuthContext);

    return user ? (
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
    ) : (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    );
};

export default CheckUserAuth;
