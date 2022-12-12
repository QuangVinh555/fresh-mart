import React from "react";
import "./ListAdmin.scss";
import DataTableAdmin from "../../../components/Admin/DataTableAdmin/DataTableAdmin";
import NavbarAdmin from "../../../components/Admin/NavbarAdmin/NavbarAdmin";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";

const ListAdmin = () => {
    return (
        <div className="list">
            <SidebarAdmin />
            <div className="listContainer">
                <NavbarAdmin />
                <DataTableAdmin />
            </div>
        </div>
    );
};

export default ListAdmin;
