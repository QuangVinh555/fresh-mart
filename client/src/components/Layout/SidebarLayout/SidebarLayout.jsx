import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import "./SidebarLayout.scss";

const SidebarLayout = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="container-sidebar">
                    <Sidebar />
                </div>
                <div className="container-body">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SidebarLayout;
