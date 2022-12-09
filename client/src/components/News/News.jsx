import React from "react";
import styles from "./News.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const News = () => {
    return (
        <div className={cx("newsContainer")}>
            <div className={cx("news-title")}>
                <h2>Tin tức mới nhất</h2>
            </div>
            <div className={cx("news-posts")}>
                <div className={cx("news-post")}>
                    <img
                        src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t4.jpg?v=1625889543947"
                        alt=""
                    />
                    <div className={cx("news-info")}>
                        <h2>
                            Đi chợ online: Xu hướng lên ngôi mùa dịch Covid-19
                        </h2>
                        <div className={cx("news-info-user")}>
                            <h3>Tác giả: Nguyễn Anh Dũng | </h3>
                            <span> 10/07/2021</span>
                        </div>
                    </div>
                </div>
                <div className={cx("news-post")}>
                    <img
                        src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t5.jpg?v=1625889560370"
                        alt=""
                    />
                    <div className={cx("news-info")}>
                        <h2>
                            Cách chọn rau củ quả tươi ngon, không "ngậm độc"
                        </h2>
                        <div className={cx("news-info-user")}>
                            <h3>Tác giả: Nguyễn Anh Dũng | </h3>
                            <span> 10/07/2021</span>
                        </div>
                    </div>
                </div>
                <div className={cx("news-post")}>
                    <img
                        src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t6.jpg?v=1625889575490"
                        alt=""
                    />
                    <div className={cx("news-info")}>
                        <h2>Các loại ngũ cốc tốt cho sức khỏe</h2>
                        <div className={cx("news-info-user")}>
                            <h3>Tác giả: Nguyễn Anh Dũng | </h3>
                            <span> 10/07/2021</span>
                        </div>
                    </div>
                </div>
                <div className={cx("news-post")}>
                    <img
                        src="https://bizweb.dktcdn.net/thumb/large/100/431/449/articles/t1.jpg?v=1625889497397"
                        alt=""
                    />
                    <div className={cx("news-info")}>
                        <h2>Các cách chế biến món ăn từ rau xanh</h2>
                        <div className={cx("news-info-user")}>
                            <h3>Tác giả: Nguyễn Anh Dũng | </h3>
                            <span> 10/07/2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
