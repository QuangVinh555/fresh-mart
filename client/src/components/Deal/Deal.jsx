import React from "react";
import styles from "./Deal.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const Deal = () => {
    return (
        <div className={cx("dealContainer")}>
            <Link className={cx("deal-title")}>
                <FontAwesomeIcon
                    icon={faTags}
                    className={cx("deal-title-icon")}
                />
                <h2>Ưu đãi trong tuần</h2>
            </Link>
            <div className={cx("deal-list")}>
                <div className={cx("deal-list-item")}>
                    <span className={cx("deal-discount")}>- 60%</span>
                    <div className={cx("deal-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp22.jpg?v=1628522988000"
                            alt=""
                            className={cx("deal-img")}
                        />
                    </div>
                    <span className={cx("deal-name")}>Ổi lê ruột đỏ</span>
                    <div className={cx("deal-price")}>
                        <span>20.000đ</span>
                        <span>50.000đ</span>
                    </div>
                </div>
                <div className={cx("deal-list-item")}>
                    <span className={cx("deal-discount")}>- 41%</span>
                    <div className={cx("deal-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp2.jpg?v=1625549083000"
                            alt=""
                            className={cx("deal-img")}
                        />
                    </div>
                    <span className={cx("deal-name")}>Đào đỏ Mỹ</span>
                    <div className={cx("deal-price")}>
                        <span>40.000đ</span>
                        <span>68.000đ</span>
                    </div>
                </div>
                <div className={cx("deal-list-item")}>
                    <span className={cx("deal-discount")}>- 42%</span>
                    <div className={cx("deal-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp3.jpg?v=1628523053000"
                            alt=""
                            className={cx("deal-img")}
                        />
                    </div>
                    <span className={cx("deal-name")}>Dâu tây</span>
                    <div className={cx("deal-price")}>
                        <span>138.000đ</span>
                        <span>238.000đ</span>
                    </div>
                </div>
                <div className={cx("deal-list-item")}>
                    <span className={cx("deal-discount")}>- 21%</span>
                    <div className={cx("deal-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp6.jpg?v=1625548895000"
                            alt=""
                            className={cx("deal-img")}
                        />
                    </div>
                    <span className={cx("deal-name")}>Chanh tươi vỏ xanh</span>
                    <div className={cx("deal-price")}>
                        <span>30.000đ</span>
                        <span>38.000đ</span>
                    </div>
                </div>
                <div className={cx("deal-list-item")}>
                    <span className={cx("deal-discount")}>- 42%</span>
                    <div className={cx("deal-product")}>
                        <img
                            src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp5.jpg?v=1625548796000"
                            alt=""
                            className={cx("deal-img")}
                        />
                    </div>
                    <span className={cx("deal-name")}>Trái cam mật</span>
                    <div className={cx("deal-price")}>
                        <span>138.000đ</span>
                        <span>238.000đ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deal;
