import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductHover.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

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

const ProductHover = () => {
    return (
        <div className={cx("productContainer")}>
            <ul>
                {products.map((product, index) => (
                    <Link to={product.type} key={index}>
                        <li>{product.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ProductHover;
