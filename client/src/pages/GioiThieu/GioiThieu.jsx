import React from "react";
import classNames from "classnames/bind";
import styles from "./GioiThieu.module.scss";
import Title from "../../components/Title/Title";

const cx = classNames.bind(styles);

const GioiThieu = () => {
    return (
        <div className={cx("wrapper")}>
            <Title />
            <div className={cx("introduct-content")}>
                <div className={cx("introduct-content-item")}>
                    <h2>Giới thiệu</h2>
                    <p>
                        <b>ND Fresh</b> là hệ thống cửa hàng thực phẩm sạch uy
                        tín nhất ở Việt Nam, chuyên cung cấp thực phẩm sạch tới
                        từng bếp ăn của gia đình bạn.
                    </p>
                    <p>
                        <b>Tầm nhìn:</b> Được nuôi trồng, chế biến theo phương
                        Bio (sinh học), Organic (hữu cơ), Eco (sinh thái); cam
                        kết không bán hàng giả, hàng nhái và hàng kém chất
                        lượng. Sản phẩm được giao đến tay khách hàng luôn đúng
                        cam kết, đúng chất lượng niệm yết, luôn được bảo quản
                        trong môi trường lý tưởng, đảm bảo vệ sinh an toàn thực
                        phẩm.
                    </p>
                    <p>
                        <b>Mục tiêu:</b> Sản phẩm được giao đến tay khách hàng
                        luôn đúng cam kết, đúng chất lượng niệm yết, luôn được
                        bảo quản trong môi trường lý tưởng, đảm bảo vệ sinh an
                        toàn thực phẩm.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GioiThieu;
