import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const PublicLayout = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    );
};

export default PublicLayout;
