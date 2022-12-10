import React from "react";
import { Outlet } from "react-router-dom";
import Title from "../../Title/Title";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import classNames from "classnames/bind";

import styles from "./SidebarLayout.module.scss";

const cx = classNames.bind(styles);

const SidebarLayout = () => {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Title />
                <div className={cx("container-content")}>
                    <div className={cx("container-content-sidebar")}>
                        <Sidebar />
                    </div>
                    <div className={cx("container-content-body")}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SidebarLayout;
