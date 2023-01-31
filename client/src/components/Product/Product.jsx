import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const cx = classNames.bind(styles);

const Product = ({ item, setOpen }) => {
    const { addCart } = useContext(CartContext);
    const handleOpenCartModal = async (e) => {
        e.stopPropagation();
        const newProduct = {
            id_user: "6399c164fa9441588190f073",
            id_product: item._id,
        };
        await addCart(newProduct);
        setOpen(true);
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/sanpham/${item._id}`);
    };

    return (
        <div className={cx("product-content")}>
            <div className={cx("product-content-list")} onClick={handleClick}>
                <span className={cx("product-discount")}>
                    - {item.discount}
                </span>
                <div className={cx("product-product")}>
                    <img
                        src={item.image}
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
                            onClick={handleOpenCartModal}
                        />
                    </div>
                </div>
                <span className={cx("product-name")}>{item.name}</span>
                <div className={cx("product-price")}>
                    <span>{item.price}đ</span>
                    <span>68.000đ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
