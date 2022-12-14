import React, { useContext, useState } from "react";
import "./UpdateUser.scss";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const UpdateUser = ({ setOpen, user }) => {
    const {
        updateUser,
        state: { loading },
    } = useContext(UserContext);
    const [file, setFile] = useState("");
    const params = useParams().userId;
    const [info, setInfo] = useState({});
    console.log(info);
    const handleChangeUser = (e) => {
        setInfo({ ...info, [e.target.id]: e.target.value });
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/quangvinh255/image/upload",
                data
            );
            const { url } = uploadRes.data;
            const newUser = {
                ...info,
                image: url,
            };
            await updateUser(params, newUser);
            if (loading) {
                return (
                    <Box sx={{ display: "flex" }}>
                        <CircularProgress Determinate Indeterminate />
                    </Box>
                );
            }
            alert("Cập nhật user thành công");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="updateUser">
            <div className="updateUserContainer">
                <CloseIcon
                    className="updateUser-icon"
                    onClick={() => setOpen(false)}
                />
                <div className="updateUserImg">
                    <img
                        src={
                            file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        }
                        alt=""
                    />
                    <div className="updateUserImg-icon">
                        <label htmlFor="file">
                            Image:{" "}
                            <DriveFolderUploadOutlinedIcon className="updateUser-iconImg" />
                        </label>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
                <form className="updateUserInfo">
                    <input
                        id="name"
                        className="updateUserInfo-title"
                        type="text"
                        placeholder={user?.name}
                        onChange={handleChangeUser}
                    />
                    <label htmlFor="name">
                        <EditIcon className="updateUserInfo-iconEdit" />
                    </label>
                    <div className="updateUserInfo-form">
                        <label>Email: </label>
                        <input
                            className="updateUserInfo-input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder={user?.email}
                            onChange={handleChangeUser}
                        />
                        <label htmlFor="email">
                            <EditIcon className="updateUserInfo-iconEdit" />
                        </label>
                    </div>
                    <div className="updateUserInfo-form">
                        <label>Phone: </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder={user?.phone}
                            className="updateUserInfo-input"
                            onChange={handleChangeUser}
                        />
                        <label htmlFor="phone">
                            <EditIcon className="updateUserInfo-iconEdit" />
                        </label>
                    </div>
                    <div className="updateUserInfo-form">
                        <label>Address: </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder={user?.address}
                            className="updateUserInfo-input"
                            onChange={handleChangeUser}
                        />
                        <label htmlFor="address">
                            <EditIcon className="updateUserInfo-iconEdit" />
                        </label>
                    </div>

                    <div className="updateUserInfo-button">
                        <button
                            onClick={() => setOpen(false)}
                            type="submit"
                            className="btnCancel"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            className="btnConfirm"
                            onClick={handleUpdateUser}
                        >
                            Đồng Ý
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
