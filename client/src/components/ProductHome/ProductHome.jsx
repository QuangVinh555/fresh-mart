import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductHome.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faCircleInfo,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const ProductHome = ({ title }) => {
    return (
        <div className={cx("productHomeContainer")}>
            <div
                className={
                    title === "Trái cây"
                        ? cx("product-category")
                        : title === "Rau củ quả"
                        ? cx("product-category-vegetable")
                        : cx("product-category-freshFood")
                }
            >
                <div className={cx("product-category-title")}>
                    <h2>{title}</h2>
                </div>
                <div className={cx("product-category-name")}>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCircle} />
                            <Link to="trai-cay">Trái cây</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircle} />
                            <Link to="thit-tuoi">Thịt tươi</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircle} />
                            <Link to="hai-san-tuoi">Hải sản tươi</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircle} />
                            <Link to="rau-cu">Rau củ</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircle} />
                            <Link to="thuc-pham-kho">Thực phẩm khô</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx("product-category-link")}>
                    <Link>Mua sắm ngay bây giờ!</Link>
                </div>
            </div>
            <div className={cx("product-content")}>
                <div className={cx("product-content-list")}>
                    <span className={cx("product-discount")}>- 60%</span>
                    <div className={cx("product-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp2.jpg?v=1625549083000"
                            alt=""
                            className={cx("product-img")}
                        />
                        <div className={cx("product-product-icon")}>
                            <FontAwesomeIcon
                                className={cx("product-product-icon-heart")}
                                icon={faHeart}
                            />
                            <FontAwesomeIcon
                                className={cx("product-product-icon-detail")}
                                icon={faCircleInfo}
                            />
                        </div>
                    </div>
                    <span className={cx("product-name")}>Đào đỏ Mỹ</span>
                    <div className={cx("product-price")}>
                        <span>40.000đ</span>
                        <span>68.000đ</span>
                    </div>
                </div>
                <div className={cx("product-content-list")}>
                    <span className={cx("product-discount")}>- 42%</span>
                    <div className={cx("product-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053000"
                            alt=""
                            className={cx("product-img")}
                        />
                        <div className={cx("product-product-icon")}>
                            <FontAwesomeIcon
                                className={cx("product-product-icon-heart")}
                                icon={faHeart}
                            />
                            <FontAwesomeIcon
                                className={cx("product-product-icon-detail")}
                                icon={faCircleInfo}
                            />
                        </div>
                    </div>
                    <span className={cx("product-name")}>Dâu tây</span>
                    <div className={cx("product-price")}>
                        <span>138.000đ</span>
                        <span>238.000đ</span>
                    </div>
                </div>
                <div className={cx("product-content-list")}>
                    <span className={cx("product-discount")}>- 21%</span>
                    <div className={cx("product-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000"
                            alt=""
                            className={cx("product-img")}
                        />
                        <div className={cx("product-product-icon")}>
                            <FontAwesomeIcon
                                className={cx("product-product-icon-heart")}
                                icon={faHeart}
                            />
                            <FontAwesomeIcon
                                className={cx("product-product-icon-detail")}
                                icon={faCircleInfo}
                            />
                        </div>
                    </div>
                    <span className={cx("product-name")}>
                        Chanh tươi vỏ xanh
                    </span>
                    <div className={cx("product-price")}>
                        <span>30.000đ</span>
                        <span>38.000đ</span>
                    </div>
                </div>
                <div className={cx("product-content-list")}>
                    <span className={cx("product-discount")}>- 42%</span>
                    <div className={cx("product-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp5.jpg?v=1625548796000"
                            alt=""
                            className={cx("product-img")}
                        />
                        <div className={cx("product-product-icon")}>
                            <FontAwesomeIcon
                                className={cx("product-product-icon-heart")}
                                icon={faHeart}
                            />
                            <FontAwesomeIcon
                                className={cx("product-product-icon-detail")}
                                icon={faCircleInfo}
                            />
                        </div>
                    </div>
                    <span className={cx("product-name")}>Trái cam mật</span>
                    <div className={cx("product-price")}>
                        <span>138.000đ</span>
                        <span>238.000đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHome;
