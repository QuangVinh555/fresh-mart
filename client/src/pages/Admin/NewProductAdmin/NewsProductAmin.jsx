import React, { useEffect } from "react";
import "./NewsProductAdmin.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import SidebarAdmin from "../../../components/Admin/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/Admin/NavbarAdmin/NavbarAdmin";
import { useContext, useState } from "react";
import { CategoryContext } from "../../../contexts/CategoryContext";
import axios from "axios";
import { ProductContext } from "../../../contexts/ProductContext";

const NewsProductAdmin = ({ title, inputs }) => {
    const { addProduct } = useContext(ProductContext);
    const {
        getAllCategories,
        state: { loading, categories },
    } = useContext(CategoryContext);
    const [file, setFile] = useState("");
    const [product, setProduct] = useState({});
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        const getAllCatalog = async () => {
            await getAllCategories();
        };
        getAllCatalog();
    }, []);

    const handleSelectCategory = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.id]: e.target.value });
    };
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        try {
            const uploadFile = await axios.post(
                "https://api.cloudinary.com/v1_1/quangvinh255/image/upload",
                data
            );
            const { url } = uploadFile.data;

            const newProduct = {
                ...product,
                image: url,
                id_category: selectedCategory,
            };
            await addProduct(newProduct);
            alert("Thêm sản phẩm thành công");
            window.location.reload();
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
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                            <div className="formInput">
                                <label>Category</label>
                                <select
                                    id="category"
                                    onChange={handleSelectCategory}
                                    defaultValue={selectedCategory}
                                >
                                    <option>--Chọn danh mục--</option>
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
                            <button onClick={handleAddProduct}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsProductAdmin;
