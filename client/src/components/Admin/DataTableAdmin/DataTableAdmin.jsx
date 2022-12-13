import React, { useContext, useEffect } from "react";
import "./DataTableAdmin.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { AllContext } from "../../../contexts/AllContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const DataTableAdmin = ({ columns }) => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const {
        getAllUsers,
        state: { loading, data },
    } = useContext(AllContext);

    useEffect(() => {
        const getAll = async () => {
            if (loading) {
                return (
                    <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                    </Box>
                );
            }
            await getAllUsers(path);
        };
        getAll();
    }, [path]);
    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={`/admin/${path}/${params.row._id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to={`/admin/${path}/new`} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data || ""}
                columns={columns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                getRowId={(row) => row._id}
            />
        </div>
    );
};

export default DataTableAdmin;
