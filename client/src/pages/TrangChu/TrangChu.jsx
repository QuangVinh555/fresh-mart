import React from "react";
import classNames from "classnames/bind";
import styles from "./TrangChu.module.scss";
import Category from "../../components/Category/Category";
import Deal from "../../components/Deal/Deal";

const cx = classNames.bind(styles);
const TrangChu = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("picture")}>
                <img
                    src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/slider_1.jpg?1666922741919"
                    alt=""
                    className={cx("pictureImg")}
                />
            </div>
            <div className={cx("category")}>
                <Category />
            </div>
            <div className="deal">
                <Deal />
            </div>
            <div className={cx("banner")}>
                <div className={cx("banner-container")}>
                    <img
                        src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/banner_1.jpg?1666922741919"
                        alt=""
                    />
                </div>
                <div className={cx("banner-container")}>
                    <img
                        src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/banner_2.jpg?1666922741919"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default TrangChu;
