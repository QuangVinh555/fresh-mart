import React from "react";
import "./HomeAdmin.scss";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/Admin/NavbarAdmin/NavbarAdmin";
import WidgetAdmin from "../../../components/Admin/WidgetAdmin/WidgetAdmin";
import FeaturedAdmin from "../../../components/Admin/FeaturedAdmin/FeaturedAdmin";
import ChartAdmin from "../../../components/Admin/ChartAdmin/ChartAdmin";
import TableAdmin from "../../../components/Admin/TableAdmin/TableAdmin";

const HomeAmin = () => {
    return (
        <div className="home">
            <SidebarAdmin />
            <div className="homeContainer">
                <NavbarAdmin />
                <div className="widgets">
                    <WidgetAdmin type="user" />
                    <WidgetAdmin type="order" />
                    <WidgetAdmin type="earning" />
                    <WidgetAdmin type="balance" />
                </div>
                <div className="charts">
                    <FeaturedAdmin />
                    <ChartAdmin
                        title="Last 6 Months (Revenue)"
                        aspect={2 / 1}
                    />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <TableAdmin />
                </div>
            </div>
        </div>
    );
};

export default HomeAmin;
