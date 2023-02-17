import {
   
    SINGLE_PROVEEDOR
  } from "../tipos/types";
  
  const INITIAL_STATE = {
    proveedores: [],
    loading: {}
  };
  
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
   
      case SINGLE_PROVEEDOR:
        return {
          ...state,
          proveedores: action.payload,
          loading: false
        };
    
      default:
        return state;
    }
  };