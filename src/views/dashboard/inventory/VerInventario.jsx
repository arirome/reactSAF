import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Spinner from "../../../components/spinner/Spinner";
import { fetchConToken } from "../../../helpers/fetch";
import "./verinventario.scss";

const orderColumns = [
  {
    field: "_id",
    headerName: "ID",
    hide: true,
    width: 50,
    headerClassName: "super-app-theme--header",
  },
 
  {
    field: "productos",
    headerName: "Productos",
    headerClassName: "super-app-theme--header",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <Image
            className="cellImg"
            cloudName="dawjd5cx8"
            publicId={params.row.producto.img}
            alt="avatar"
          >
            <Transformation
              height="30"
              width="30"
              radius="max"
              aspectRatio="1.5"
              crop="fill"
            />
          </Image>
          {/* {params.row.producto.descripcion} <br />{" "}
          {`Lote: ${params.row.producto.lote}`} */}
        </div>
      );
    },
    valueGetter: (params) => params.row.producto.descripcion,
  },
 /*  {
    align: "center",
    headerAlign: "center",
    field: "precio",
    headerClassName: "super-app-theme--header",
    headerName: "Precio Unitario ($)",
    flex: 1,
  }, */
  {
    align: "center",
    headerAlign: "center",
    field: "cantidad",
    headerClassName: "super-app-theme--header",
    headerName: "Cantidad",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",

    headerClassName: "super-app-theme--header",
    headerName: "Precio ($)",
    flex: 1,

    renderCell: (params) => {
      return (
        <div className="cellWithImg" key={params.row._id}>
          {params.row.cantidad * params.row.precio}
        </div>
      );
    },
  },
  
];

const VerInventario
 = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  const cargarProveedor = async () => {
    const resp = await fetchConToken(`api/v1/productos/proveedor/${id}`);

    const orden = await resp.json();

    if (resp.ok) {
      setData(orden);
      console.log(orden)
      setLoading(false);
    }
  };
console.log(data)

  useEffect(() => {
    cargarProveedor();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="single-order">
      <div className="single-order-container">
        <div className="single-order-top">
          <div className="single-order-top-text">Detalles del Inventario:</div>
        </div>
        <div style={{ display: "flex" }}>
          
          <div className="single-order-bottom">
            <div className="datatable">
              <Box
                sx={{
                  height: "90%",
                  width: "100%",
                  "& .super-app-theme--header": {
                    backgroundColor: "#045694",
                    color: "#fff",
                  },
                }}
              >
                <DataGrid
                  className="datagrid"
                  rows={data}
                  columns={orderColumns}
                  getRowId={(row) => row._id}
                  autoHeight
                  hideFooter={true}
                  pageSize={7}
                  rowsPerPageOptions={[7]}
                  checkboxSelection={false}
                />
              </Box>
              <div
                className="single-order-list"
                style={{
                  backgroundColor: "#003667",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div className="single-order-img"></div>
                <div className="single-order-descripcion"></div>
                <div className="single-order-descripcion"></div>
                <div className="single-order-descripcion"></div>
                
              </div>
            </div>

  
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerInventario;