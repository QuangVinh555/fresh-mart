export const userColumns = [
    {
        field: "_id",
        headerName: "ID",
        width: 240,
        renderCell: (params) => {
            return <div className="cellId">{params.row._id}</div>;
        },
    },
    {
        field: "name",
        headerName: "User",
        width: 210,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        className="cellImg"
                        src={
                            params.row.image ||
                            "https://raw.githubusercontent.com/QuangVinh555/bago/main/frontend/public/assets/person/noAvatar.png"
                        }
                        alt="avatar"
                    />
                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 250,
    },

    {
        field: "address",
        headerName: "Address",
        width: 240,
    },
    {
        field: "phone",
        headerName: "Phone",
        width: 150,
    },
    // {
    //     field: "status",
    //     headerName: "Status",
    //     width: 140,
    //     renderCell: (params) => {
    //         return (
    //             <div className={`cellWithStatus ${params.row.status}`}>
    //                 {params.row.status}
    //             </div>
    //         );
    //     },
    // },
];

export const productColumns = [
    {
        field: "_id",
        headerName: "ID",
        width: 240,
        renderCell: (params) => {
            return <div className="cellId">{params.row._id}</div>;
        },
    },
    {
        field: "name",
        headerName: "Name",
        width: 210,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        className="cellImg"
                        src={
                            params.row.image ||
                            "https://raw.githubusercontent.com/QuangVinh555/bago/main/frontend/public/assets/person/noAvatar.png"
                        }
                        alt="avatar"
                    />
                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "price",
        headerName: "Price(VND)",
        width: 250,
    },

    {
        field: "count",
        headerName: "Count",
        width: 80,
    },

    {
        field: "discount",
        headerName: "Discount(%)",
        width: 240,
    },
    // {
    //     field: "status",
    //     headerName: "Status",
    //     width: 140,
    //     renderCell: (params) => {
    //         return (
    //             <div className={`cellWithStatus ${params.row.status}`}>
    //                 {params.row.status}
    //             </div>
    //         );
    //     },
    // },
];
