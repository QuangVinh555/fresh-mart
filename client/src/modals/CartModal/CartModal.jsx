import React from "react";
import "./CartModal.scss";
import "animate.css";
import CloseIcon from "@mui/icons-material/Close";

const CartModal = ({ setOpen, open }) => {
    return (
        <div className="cartModal">
            <div
                className={
                    open
                        ? "cartModalContainer animate__animated animate__fadeInRightBig"
                        : "cartModalContainer animate__animated animate__fadeInLeft"
                }
            >
                <div className="cartModal-header">
                    <h1>Giỏ hàng</h1>
                    <CloseIcon
                        className="cartModal-headerIcon"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <div className="cartModal-product">
                    <div className="cartModal-product-item">
                        <div className="cartModal-productImg">
                            <img
                                src="https://bizweb.dktcdn.net/thumb/medium/100/431/449/products/sp19.jpg"
                                alt=""
                            />
                        </div>
                        <div className="cartModal-productInfo">
                            <h2>Ớt chuông vàng</h2>
                            <span>Số lượng</span>
                            <div className="cartModal-productInput">
                                <button type="button" className="">
                                    -
                                </button>
                                <input type="text" placeholder="1" disabled />
                                <button type="button" className="">
                                    +
                                </button>
                            </div>
                            <div className="cartModal-productPrice">
                                <span>12.000đ</span>
                                <span>Bỏ sản phẩm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cartModal-footer">
                    <div className="cartModal-footerPrice">
                        <span>Tổng tiền: </span>
                        <span>348.000đ </span>
                    </div>
                    <div className="cartModal-footerButton">
                        <button>Thanh toán</button>
                        <button onClick={() => setOpen(false)}>
                            Tiếp tục mua hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
