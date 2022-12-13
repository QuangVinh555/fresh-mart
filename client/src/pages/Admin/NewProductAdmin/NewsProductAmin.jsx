import React, { useEffect } from "react";
import "./NewsProductAdmin.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/Admin/NavbarAdmin/NavbarAdmin";
import { useContext } from "react";
import { CategoryContext } from "../../../contexts/CategoryContext";

const NewsProductAdmin = ({ title, inputs }) => {
    const {
        getAllCategories,
        state: { loading, categories },
    } = useContext(CategoryContext);
    const [file, setFile] = useState("");

    useEffect(() => {
        const getAllCatalog = async () => {
            await getAllCategories();
        };
        getAllCatalog();
    }, []);

    const handleSelectCategory = (e) => {
        console.log(e.target.value);
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
                                        type={input.type}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Category</label>
                                <select
                                    id="category"
                                    onChange={handleSelectCategory}
                                >
                                    {loading
                                        ? "loading..."
                                        : categories &&
                                          categories.map((item) => (
                                              <option
                                                  value={item._id}
                                                  key={item._id}
                                              >
                                                  {item.name}
                                              </option>
                                          ))}
                                </select>
                            </div>
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsProductAdmin;
