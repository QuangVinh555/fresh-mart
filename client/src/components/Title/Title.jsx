import React from "react";
import classNames from "classnames/bind";
import styles from "./Title.module.scss";
import { Link, useLocation } from "react-router-dom";
import { headerLists } from "../Layout/components/Header/Header";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const cx = classNames.bind(styles);

const Title = ({ open }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [productSlug, setProductSlug] = useState("");
    useEffect(() => {
        const pathApi = async () => {
            const res = await axios.get(`${PK}/product/${pathId}`);
            setProductSlug(res.data);
        };
        pathApi();
    }, [open]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("wrapper-img")}>
                {open && (
                    <div className={cx("wrapper-title")}>
                        <h2>{productSlug.name}</h2>
                        <Link to="/" className={cx("wrapper-home")}>
                            Trang chủ /{" "}
                        </Link>
                        <Link to="/sanpham" className={cx("wrapper-home")}>
                            Sản phẩm /{" "}
                        </Link>
                        <span className={cx("wrapper-name")}>
                            {productSlug.name}
                        </span>
                    </div>
                )}
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
