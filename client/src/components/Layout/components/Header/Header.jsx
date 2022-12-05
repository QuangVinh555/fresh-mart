import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

const headerLists = [
    {
        title: "Trang Chủ",
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

const Header = () => {
    return (
        <div className={cx("header")}>
            <div className="headerList">
                <ul>
                    {headerLists.map((item, index) => (
                        <Link to={item.path}>
                            <li key={index}>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className={cx("headerImg")}>
                <Link>
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
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className="headerOption-user">
                    <Link>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faCartArrowDown} />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
