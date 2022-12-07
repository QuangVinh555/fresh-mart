import React from "react";
import { Link } from "react-router-dom";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const categories = [
    {
        name: "Trứng và bơ",
        img: "https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_1.jpg?1666922741919",
        path: "do-an-dong-hop",
    },
    {
        name: "Thực phẩm khô",
        img: "https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_2.jpg?1666922741919",
        path: "thuc-pham-kho",
    },
    {
        name: "Thịt tươi sống",
        img: "https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_3.jpg?1666922741919",
        path: "thit-tuoi",
    },
    {
        name: "Trái cây",
        img: "https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_4.jpg?1666922741919",
        path: "trai-cay",
    },
    {
        name: "Rau củ quả",
        img: "https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_5.jpg?1666922741919",
        path: "rau-cu",
    },
    {
        name: "Nước ép",
        img: "https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/cate_6.jpg?1666922741919",
        path: "do-uong",
    },
];

const Category = () => {
    return (
        <>
            {categories.map((item, index) => (
                <Link
                    to={item.path}
                    className={cx("category-list")}
                    key={index}
                >
                    <img src={item.img} alt="" className={cx("category-img")} />
                    <span className={cx("category-name")}>{item.name}</span>
                </Link>
            ))}
        </>
    );
};

export default Category;
