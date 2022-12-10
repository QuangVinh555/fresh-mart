import React from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Product = () => {
    return (
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
                            icon={faCartPlus}
                        />
                    </div>
                </div>
                <span className={cx("product-name")}>Đào đỏ Mỹ</span>
                <div className={cx("product-price")}>
                    <span>40.000đ</span>
                    <span>68.000đ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
