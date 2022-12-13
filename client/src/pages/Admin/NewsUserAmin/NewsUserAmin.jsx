import React from "react";
import "./NewsUserAdmin.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/Admin/NavbarAdmin/NavbarAdmin";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const NewsUserAdmin = ({ title, inputs }) => {
    const { register } = useContext(AuthContext);
    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleChangeInfo = (e) => {
        setInfo({ ...info, [e.target.id]: e.target.value });
    };
    const handleAddUser = async (e) => {
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
            if (info.password !== confirmPassword) {
                alert("Mật khẩu không trùng khớp");
            }
            const user = {
                ...info,
                image: url,
            };
            await register(user);
            alert("Thêm user thành công");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="new">
            <SidebarAdmin />
            <div className="newContainer">
                <NavbarAdmin />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image:{" "}
                                    <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleChangeInfo}
                                    />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Confirm password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>
                            <button onClick={handleAddUser}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsUserAdmin;
