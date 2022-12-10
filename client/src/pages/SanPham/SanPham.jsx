import React from "react";
import classNames from "classnames/bind";
import styles from "./SanPham.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDownZA } from "@fortawesome/free-solid-svg-icons";
import Product from "../../components/Product/Product";

const cx = classNames.bind(styles);

const SanPham = () => {
    return (
        <div className={cx("product")}>
            <div className={cx("product-filter")}>
                <div className={cx("product-filter-sortIcon")}>
                    <FontAwesomeIcon icon={faArrowDownZA} />
                    <span>Xếp theo</span>
                </div>
                <div className={cx("product-filter-price")}>
                    <div className={cx("product-filter-price-radio")}>
                        <input type="radio" name="radio" />
                        <label>Tên A-Z</label>
                    </div>
                    <div className={cx("product-filter-price-radio")}>
                        <input type="radio" name="radio" />
                        <label>Tên Z-A</label>
                    </div>
                    <div className={cx("product-filter-price-radio")}>
                        <input type="radio" name="radio" />
                        <label>Giá thấp đến cao</label>
                    </div>
                    <div className={cx("product-filter-price-radio")}>
                        <input type="radio" />
                        <label>Giá cao xuống thấp</label>
                    </div>
                </div>
            </div>
            <div className={cx("product-body")}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

export default SanPham;
