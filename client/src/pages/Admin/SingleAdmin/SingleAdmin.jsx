import React, { useContext, useEffect, useState } from "react";
import "./SingleAdmin.scss";

import ChartAdmin from "../../../components/Admin/ChartAdmin/ChartAdmin";
import NavbarAdmin from "../../../components/Admin/NavbarAdmin/NavbarAdmin";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TableAdmin from "../../../components/Admin/TableAdmin/TableAdmin";
import { UserContext } from "../../../contexts/UserContext";
import { useParams } from "react-router-dom";
import UpdateUser from "../../../modals/UpdateUser";

const SingleAdmin = () => {
    const {
        getUser,
        state: { user },
    } = useContext(UserContext);
    const param = useParams().userId;
    useEffect(() => {
        const loadUser = async () => {
            await getUser(param);
        };
        loadUser();
    }, [param]);

    const [openUpdateUser, setOpenUpdateUser] = useState(false);
    const handleOpenEdit = () => {
        setOpenUpdateUser(true);
    };

    return (
        <div className="single">
            <SidebarAdmin />
            <div className="singleContainer">
                <NavbarAdmin />
                <div className="top">
                    <div className="left">
                        <div className="editButton" onClick={handleOpenEdit}>
                            Edit
                        </div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src={user?.image} alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">{user?.name}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">
                                        {user?.email}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">
                                        {user?.phone}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">
                                        {user?.address}
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <ChartAdmin
                            aspect={3 / 1}
                            title="User Spending ( Last 6 Months)"
                        />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <TableAdmin />
                </div>
            </div>
            {openUpdateUser && (
                <UpdateUser setOpen={setOpenUpdateUser} user={user} />
            )}
        </div>
    );
};

export default SingleAdmin;
