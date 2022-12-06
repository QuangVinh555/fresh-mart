import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartArrowDown,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const headerLists = [
    {
        title: "Trang chủ",
        path: "/",
    },
    {
        title: "Giới thiệu",
        path: "/gioithieu",
    },
    {
        title: "Sản phẩm",
        path: "/sanpham",
    },
    {
        title: "Tin tức",
        path: "/tintuc",
    },
    {
        title: "Liên hệ",
        path: "/lienhe",
    },
];

const products = [
    {
        name: "Trái cây",
        type: "trai-cay",
    },
    {
        name: "Thịt tươi",
        type: "thit-tuoi",
    },
    {
        name: "Hải sản tươi",
        type: "hai-san-tuoi",
    },
    {
        name: "Rau củ",
        type: "rau-cu",
    },
    {
        name: "Thực phẩm khô",
        type: "thuc-pham-kho",
    },
    {
        name: "Đồ uống",
        type: "do-uong",
    },
    {
        name: "Hạt giống",
        type: "hat-giong",
    },
    {
        name: "Đồ ăn đóng hộp",
        type: "do-an-dong-hop",
    },
];

const Header = () => {
    return (
        <div className={cx("header")}>
            <div className={cx("headerList")}>
                <ul>
                    {headerLists.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className={cx("headerList-title")}
                        >
                            {item.title === "Sản phẩm" ? (
                                <>
                                    <li
                                        className={cx(
                                            "headerListItem-dropdown"
                                        )}
                                    >
                                        {item.title}
                                        <FontAwesomeIcon
                                            icon={faCaretDown}
                                            className={cx(
                                                "headerListItem-icon"
                                            )}
                                        />
                                        <div className={cx("productHover")}>
                                            <ul>
                                                {products.map(
                                                    (product, index) => (
                                                        <Link
                                                            to={product.type}
                                                            key={index}
                                                        >
                                                            <li>
                                                                {product.name}
                                                            </li>
                                                        </Link>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </li>
                                </>
                            ) : (
                                <li>{item.title}</li>
                            )}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className={cx("headerImg")}>
                <Link to="/">
                    <img
                        src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/logo.png?1666922741919"
                        alt=""
                    />
                </Link>
            </div>
            <div className={cx("headerOptions")}>
                <div className={cx("headerOptions-search")}>
                    <input
                        type="text"
                        placeholder="Bạn cần tìm gì?"
                        className={cx("headerOptions-input")}
                    />
                    <button className={cx("headerOptions-btn")}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx("headerOptions-user")}>
                    <Link>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className={cx("headerOptions-user-numbers")}>
                            1
                        </span>
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faCartArrowDown} />
                        <span className={cx("headerOptions-user-numbers")}>
                            2
                        </span>
                    </Link>
                    <Link>
                        <FontAwesomeIcon
                            icon={faUser}
                            className={cx("headerOptions-user-profile")}
                        />
                        <ul className={cx("headerOptions-profileList")}>
                            <li>Đăng nhập</li>
                            <li>Đăng ký</li>
                        </ul>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
