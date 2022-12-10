import React from "react";
import classNames from "classnames/bind";
import styles from "./Title.module.scss";
import { Link, useLocation } from "react-router-dom";
import { headerLists } from "../Layout/components/Header/Header";

const cx = classNames.bind(styles);

const Title = () => {
    const location = useLocation();

    return (
        <div className={cx("wrapper")}>
            <div className={cx("wrapper-img")}>
                {headerLists.map(
                    (item, index) =>
                        location.pathname === item.path && (
                            <div className={cx("wrapper-title")} key={index}>
                                <h2>{item.title}</h2>
                                <Link to="/" className={cx("wrapper-home")}>
                                    Trang chủ /{" "}
                                </Link>
                                <span className={cx("wrapper-name")}>
                                    {item.title}
                                </span>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Title;
