import React from "react";
import classNames from "classnames/bind";
import styles from "./TrangChu.module.scss";
import Category from "../../components/Category/Category";
import Deal from "../../components/Deal/Deal";
import ProductHome from "../../components/ProductHome/ProductHome";
import { Link } from "react-router-dom";
import News from "../../components/News/News";

const cx = classNames.bind(styles);
const categories = ["Trái cây", "Rau củ quả", "Thực phẩm tươi"];
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
            <div className={cx("productHome")}>
                {categories.map((item, index) => (
                    <ProductHome key={index} title={item} />
                ))}
            </div>
            <div className={cx("delivery-express")}>
                <div className={cx("delivery-express-banner")}>
                    <img
                        src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/bg_delivery_express2.jpg?1663571844727"
                        alt=""
                    />
                    <div className={cx("delivery-express-method")}>
                        <h2>Giao hàng miễn phí tận nhà trong vòng 24h</h2>
                        <Link>Tìm hiểu thêm</Link>
                    </div>
                </div>
            </div>
            <div className={cx("news")}>
                <News />
            </div>
        </div>
    );
};

export default TrangChu;
