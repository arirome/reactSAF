import axios from "axios";
import { fetchConToken } from "../../helpers/fetch";

import {  SINGLE_PROVEEDOR } from "../tipos/types";





export const VerProveedorSingle = (punto) => {
  return {
    type: SINGLE_PROVEEDOR,
    payload: punto,
  };
};



export const singleProveedor = (id) => async (dispatch) => {

  const res = await fetchConToken(`api/v1/productos/proveedor/${id}`);
  const body = await res.json();


  dispatch(VerProveedorSingle(body));
  console.log("hola");
  console.log(res);
};

