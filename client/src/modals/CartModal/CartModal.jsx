import React, { useContext, useEffect } from "react";
import "./CartModal.scss";
import "animate.css";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "../../contexts/CartContext";
import { useState } from "react";

const CartModal = ({ setOpen, open }) => {
    const {
        getCartofUser,
        state: { carts },
        deleteCart,
    } = useContext(CartContext);

    useEffect(() => {
        const getAllCart = async () => {
            await getCartofUser("6399c164fa9441588190f073");
        };
        getAllCart();
    }, []);

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
                    {carts?.map((item, index) => (
                        <div key={index} className="cartModal-product-item">
                            <div className="cartModal-productImg">
                                <img src={item?.image} alt="" />
                            </div>
                            <div className="cartModal-productInfo">
                                <h2>{item?.name}</h2>
                                <span>Số lượng</span>
                                <div className="cartModal-productInput">
                                    <button type="button" className="">
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        placeholder="1"
                                        disabled
                                    />
                                    <button type="button" className="">
                                        +
                                    </button>
                                </div>
                                <div className="cartModal-productPrice">
                                    <span>{item?.price}</span>
                                    <span onClick={() => deleteCart(item._id)}>
                                        Bỏ sản phẩm
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
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
