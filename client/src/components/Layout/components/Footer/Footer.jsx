import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faceb } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx("footer")}>
            <div className={cx("footerContainer")}>
                <div className={cx("footer-left")}>
                    <h2>Đăng ký nhận thông tin</h2>
                    <div className={cx("footer-left-register")}>
                        <p>
                            Đăng ký nhận bản tin để nhận ưu đãi đặc biệt về sản
                            phẩm ND Fresh
                        </p>
                        <div className={cx("footer-email")}>
                            <input
                                type="text"
                                placeholder="Nhập email của bạn"
                            />
                            <button>Đăng ký</button>
                        </div>
                    </div>
                </div>
                <div className={cx("footer-center")}>
                    <img
                        src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/logo_footer.png?1666922741919"
                        alt=""
                    />
                    <p>
                        Website thương mại điện tử ND Fresh do ND Group là đơn
                        vị chủ quản, chịu trách nhiệm và thực hiện các giao dịch
                        liên quan mua sắm sản phẩm hàng hoá tiêu dùng thiết yếu.
                    </p>
                    <img
                        src="https://bizweb.dktcdn.net/100/431/449/themes/877121/assets/img-footer.png?1666922741919"
                        alt=""
                    />
                </div>
                <div className={cx("footer-right")}>
                    <h2>Liên hệ với chúng tôi</h2>
                    <div className={cx("footer-right-adress")}>
                        <span>
                            <b>Địa chỉ:</b> 266 Đội Cấn, Ba Đình, Hà Nội
                        </span>
                        <span>
                            <b>Điện thoại:</b> 19006750
                        </span>
                        <span>
                            <b>Email:</b> support@gmail.vn
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx("footer-copyright")}>
                <p>@ Bản quyền thuộc về ND Fresh | Cung cấp bởi VinhDev</p>
                <div className={cx("footer-copyright-social")}>
                    {/* <FontAwesomeIcon icon={faTwitterIcon} /> */}
                    {/* <FontAwesomeIcon icon={} />
                    <FontAwesomeIcon icon={} />
                    <FontAwesomeIcon icon={} /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
