import React from "react";
import Title from "../../components/Title/Title";
import classNames from "classnames/bind";
import styles from "./ChiTietSanPham.module.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const cx = classNames.bind(styles);

const ChiTietSanPham = () => {
    return (
        <div className={cx("detailProduct")}>
            <div className={cx("detailProduct-top")}>
                <Title open={true} />
            </div>
            <div className={cx("detailProduct-bottom")}>
                <div className={cx("detailProduct-bottomTop")}>
                    <div className={cx("detailProduct-picture")}>
                        <div className={cx("detailProduct-pictureImgs")}>
                            <KeyboardArrowUpIcon
                                className={cx("detailProduct-picture-icon")}
                                fontSize="large"
                            />
                            <img
                                className={cx(
                                    "detailProduct-pictureImg",
                                    "active"
                                )}
                                src="https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp2.jpg?v=1625549083007"
                                alt=""
                            />
                            <img
                                className={cx("detailProduct-pictureImg")}
                                src="https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp2-2.jpg?v=1625549084723"
                                alt=""
                            />
                            <img
                                className={cx("detailProduct-pictureImg")}
                                src="https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/dao1.jpg?v=1628523037750"
                                alt=""
                            />
                            <KeyboardArrowDownIcon
                                className={cx("detailProduct-picture-icon")}
                                fontSize="large"
                            />
                        </div>
                        <div className={cx("detailProduct-pictureMain")}>
                            <img
                                src="https://bizweb.dktcdn.net/thumb/large/100/431/449/products/sp2.jpg?v=1625549083007"
                                alt=""
                            />
                            <div
                                className={cx("detailProduct-pictureMain-icon")}
                            >
                                <FavoriteBorderIcon
                                    className={cx(
                                        "detailProduct-pictureMain-iconHeart"
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("detailProduct-body")}>
                        <div className={cx("detailProduct-content")}>
                            <h1>Đào đỏ Mỹ</h1>
                            <span>
                                SKU: <b>(Đang cập nhật...)</b>
                            </span>
                            <div className={cx("detailProduct-content-price")}>
                                <h1>40.000đ</h1>
                                <span>68.000đ</span>
                            </div>
                            <p>
                                Tiết kiệm: <b>28.000đ</b> so với giá thị trường
                            </p>
                            <p>
                                Đào (danh pháp khoa học: Prunus persica) là một
                                loài cây được trồng để lấy quả hay hoa. Nó là
                                một loài cây sớm rụng lá, thân gỗ nhỏ, có thể
                                cao tới 5–10 m.
                            </p>
                            <div className={cx("detailProduct-content-weight")}>
                                <h2>Trọng lượng</h2>
                                <div
                                    className={cx(
                                        "detailProduct-content-weightNumber"
                                    )}
                                >
                                    <button
                                        className={cx("btn-weight", "active")}
                                    >
                                        1kg
                                    </button>
                                    <button className={cx("btn-weight")}>
                                        2kg
                                    </button>
                                    <button className={cx("btn-weight")}>
                                        3kg
                                    </button>
                                </div>
                            </div>
                            <div className={cx("detailProduct-content-count")}>
                                <h2>Số lượng</h2>
                                <div
                                    className={cx(
                                        "detailProduct-content-countNumber"
                                    )}
                                >
                                   <div className={cx("detailProduct-content-border")}>
                                        <button
                                            className={cx(
                                                "detailProduct-content-minus"
                                            )}
                                        >
                                            -
                                        </button>
                                        <input type="text" value={1} onChange={1} />
                                        <button
                                            className={cx(
                                                "detailProduct-content-plus"
                                            )}
                                        >
                                            +
                                        </button>
                                   </div>
                                    <div
                                        className={cx(
                                            "detailProduct-content-buy"
                                        )}
                                    >
                                        <button>Mua ngay</button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={cx(
                                    "detailProduct-content-addTocart"
                                )}
                            >
                                <button>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx("detailProduct-certification")}>
                        <div className={cx("detailProduct-certification-list")}>
                            <img
                                src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_1.png?1666922741919"
                                alt=""
                            />
                            <span>100% tự nhiên</span>
                        </div>
                        <div className={cx("detailProduct-certification-list")}>
                            <img
                                src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_2.png?1666922741919"
                                alt=""
                            />
                            <span>Chứng nhận ATTP</span>
                        </div>
                        <div className={cx("detailProduct-certification-list")}>
                            <img
                                src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_3.png?1666922741919"
                                alt=""
                            />
                            <span>Luôn luôn tươi mới</span>
                        </div>
                        <div className={cx("detailProduct-certification-list")}>
                            <img
                                src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/service_4.png?1666922741919"
                                alt=""
                            />
                            <span>An toàn cho sức khỏe</span>
                        </div>
                    </div>
                </div>
                <div className={cx("detailProduct-bottomBottom")}></div>
            </div>
        </div>
    );
};

export default ChiTietSanPham;
