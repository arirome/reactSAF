import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Image, Transformation } from "cloudinary-react";
import { fetchSinToken } from "../../../helpers/fetch";
import { useForm } from "../../../hooks/useForm";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Spinner from "../../../components/spinner/Spinner";
import Searching from "../../../components/searching/Searching";
import "./addInventory.scss";
import "./StylesInventory/FormulariosStyle.css"


import {
  asignarStock,
  buscador,
  cargarProductos,
  cargarProveedores,
  confirmarStock,
  productoSeleccionado,
} from "../../../redux/actions/stock";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddInventory = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    loading,
    disabled,
    disabledLote,
    selects,
    searching,
    found,
    stockUpdate,
  } = useSelector((state) => state.stockReducer);

  //const [selects, setSelects] = useState({});
  //const [loading, setLoading] = useState(true);
  const [encontrado, setEncontrado] = useState();
  const [hidden, setHidden] = useState(true);

  //console.log(encontrado, "encontrado");

  const [formValues, handleInputChange, reset] = useForm({
    producto: "",
    proveedor: "",
    lote: "",
    punto: "",
    cantidad: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asignarStock(cantidadList));
    /* let newItem =
      encontrado.destino.find((puntos) => puntos.punto === destino.uid) ||
      state.cart.find((product) => product.uid === action.payload.id); */
  };

  const { producto, proveedor, lote, cantidad, punto } = formValues;

  const [cantidadList, setCantidadList] = useState([
    { punto: "", cantidad: "" },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...cantidadList];
    list[index][name] = value;
    setCantidadList(list);
  };

  const handleDelete = (index) => {
    const list = [...cantidadList];
    list.splice(index, 1);
    setCantidadList(list);
  };

  const handleAdd = () => {
    setCantidadList([...cantidadList, { punto: "", cantidad: "" }]);
  };

  /*   const cargarInformacion = async () => {
    const resp = await fetchSinToken(`api/v1/productos?desde=0&limite=100`);
    const { productos, categorias, destinos, lotes, productores, disponibles } =
      await resp.json();
    if (resp.ok) {
      setSelects({ ...selects, destinos, lotes, productores, disponibles });
      setLoading(false);
    }
  }; */

  /*   const cargarProveedores = async () => {
    const resp = await fetchSinToken(
      `api/v1/usuarios/?desde=0&hasta=5&rol=productor`
    );
    const { total, usuarios } = await resp.json();
    if (resp.ok) {
      setSelects({ ...selects, usuarios });
      setLoading(false);
    }
  }; */

  /*   const buscador = async (producto, proveedor, lote) => {
    setBuscando(true);
    const resp = await fetchSinToken(
      `api/v1/buscar/productos/${producto}/?proveedor=${proveedor}&lote=${lote}`
    );
    const { results } = await resp.json();
    if (resp.ok) {
      setEncontrado(results[0]);
    }
    setBuscando(false);
  }; */

  useEffect(() => {
    dispatch(cargarProveedores());
  }, []);

  useEffect(() => {
    producto &&
      proveedor &&
      lote &&
      dispatch(buscador(producto, proveedor, lote));
  }, [producto, proveedor, lote]);
  if (loading) {
    return <Spinner />;
  }


  
  const generarTabs = () => {

    var div = document.getElementById("tabset");
    const inputC = document.createElement("input");
    const labelC = document.createElement("label");

    inputC.type = "radio";
    inputC.name ="tabset";
    inputC.id = "tab1";
    
    labelC.for="tab1";
    labelC.textContent=`Producto`
    
    div.appendChild(inputC);
    div.appendChild(labelC);
    
    var divPanel = document.getElementById("tab-panels")
    const section = document.createElement("section")

    const h2 = document.createElement("h2");
    const p = document.createElement("p")

    section.class="tab-panel"
    section.id="marzen"
    
    h2.textContent="DANI ??????????????"
    p.textContent = "Contenido textual"

    section.appendChild(h2)
    section.appendChild(p)
  
    divPanel.appendChild(section)
    
  }

  return (
    <>
    <div className="Container">
      <div className="formulariosTab">
        
        <button  onClick={()=>{
          generarTabs()
        }} className="btn btn-success mx-3 my-4">Agregar Otro Producto</button>
      <div className="tabset" id="tabset">
      
      <div class="tab-panels" id="tab-panels">
    
    
  </div>
</div>
      </div>

    </div>
    </>
  );
};

export default AddInventory;
