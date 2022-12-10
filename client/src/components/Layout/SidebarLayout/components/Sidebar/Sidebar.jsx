import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { products } from "../../../../../assets/product-category";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx("sidebar")}>
            <div className={cx("sidebar-category")}>
                <div className={cx("sidebar-category-title")}>
                    <h2>Danh mục sản phẩm</h2>
                </div>
                <div className={cx("sidebar-category-type")}>
                    <ul>
                        {products.map((product, index) => (
                            <Link key={index} to={product.type}>
                                <li>{product.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={cx("sidebar-filter")}>
                <div className={cx("sidebar-filter-title")}>
                    <h2>Lọc sản phẩm</h2>
                </div>
                <div className={cx("sidebar-filter-price")}>
                    <h2>Giá sản phẩm</h2>
                    <div className={cx("sidebar-filterInput")}>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>Giá dưới 100.000đ</label>
                        </div>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>100.000đ - 200.000đ</label>
                        </div>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>200.000đ - 300.000đ</label>
                        </div>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>300.000đ - 500.000đ</label>
                        </div>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>500.000đ - 1.000.000đ</label>
                        </div>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>1.000.000đ - 2.000.000đ</label>
                        </div>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>2.000.000đ - 3.000.000đ</label>
                        </div>
                        <div className={cx("sidebar-filterInput-money")}>
                            <input type="checkbox" />
                            <label>Giá trên 3.000.000đ</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
