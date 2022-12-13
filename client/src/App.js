import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";
import TrangChu from "./pages/TrangChu/TrangChu";
import GioiThieu from "./pages/GioiThieu/GioiThieu";
import SanPham from "./pages/SanPham/SanPham";
import TinTuc from "./pages/TinTuc/TinTuc";
import LienHe from "./pages/LienHe/LienHe";
import SidebarLayout from "./components/Layout/SidebarLayout/SidebarLayout";
import AdminLayout from "./components/Layout/AdminLayout/AdminLayout";
import HomeAmin from "./pages/Admin/HomeAmin/HomeAmin";
import ListAdmin from "./pages/Admin/ListAdmin/ListAdmin";
import SingleAdmin from "./pages/Admin/SingleAdmin/SingleAdmin";
import { productInputs, userInputs } from "./formSource";
import "./components/Admin/GlobalStyles/GlobalStyles.scss";
import { useContext } from "react";
import { DarkContext } from "./contexts/DarkModeContext";
import NewsProductAdmin from "./pages/Admin/NewProductAdmin/NewsProductAmin";
import NewsUserAdmin from "./pages/Admin/NewsUserAmin/NewsUserAmin";
import { productColumns, userColumns } from "./datatablesource";
function App() {
    const { dark } = useContext(DarkContext);
    return (
        <div className={dark ? "app dark" : "app"}>
            <Router>
                <Routes>
                    {/* Default Layout */}
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<TrangChu />} />
                        <Route path="/gioithieu" element={<GioiThieu />} />
                        <Route path="/tintuc" element={<TinTuc />} />
                        <Route path="/lienhe" element={<LienHe />} />
                    </Route>

                    {/* Default Sidebar Layout */}
                    <Route path="/" element={<SidebarLayout />}>
                        <Route path="/sanpham" element={<SanPham />} />
                    </Route>

                    {/* Admin Layout */}
                    <Route path="/" element={<AdminLayout />}>
                        <Route path="/admin" element={<HomeAmin />} />
                        <Route path="/admin/user">
                            <Route
                                index
                                element={<ListAdmin columns={userColumns} />}
                            />
                            <Route path=":userId" element={<SingleAdmin />} />
                            <Route
                                path="new"
                                element={
                                    <NewsUserAdmin
                                        inputs={userInputs}
                                        title="Add new User"
                                    />
                                }
                            />
                        </Route>
                        <Route path="/admin/product">
                            <Route
                                index
                                element={<ListAdmin columns={productColumns} />}
                            />
                            <Route
                                path=":productId"
                                element={<SingleAdmin />}
                            />
                            <Route
                                path="new"
                                element={
                                    <NewsProductAdmin
                                        inputs={productInputs}
                                        title="Add new Product"
                                    />
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
