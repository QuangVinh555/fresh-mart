import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

const DefaultLayout = () => {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
