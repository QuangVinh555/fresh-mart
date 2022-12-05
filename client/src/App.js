import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";
import TrangChu from "./pages/TrangChu/TrangChu";
import GioiThieu from "./pages/GioiThieu/GioiThieu";
import SanPham from "./pages/SanPham/SanPham";
import TinTuc from "./pages/TinTuc/TinTuc";
import LienHe from "./pages/LienHe/LienHe";
import SidebarLayout from "./components/Layout/SidebarLayout/SidebarLayout";
function App() {
    return (
        <div className="App">
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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
