export const FETCH_USUARIO_REQUEST = "FETCH_USUARIO_REQUEST";
export const FETCH_USUARIO_SUCCESS = "FETCH_USUARIO_SUCCESS";
export const FETCH_USUARIO_ERROR = "FETCH_USUARIO_ERROR";
export const FETCH_CLEAR_STATE = "FETCH_CLEAR_STATE";
export const CLEAR_STATE = "CLEAR_STATE";

export const FETCH_REGISTRO_SUCCESS = "FETCH_REGISTRO_SUCCESS";
export const FETCH_REGISTRO_ERROR = "FETCH_REGISTRO_ERROR";
export const CLEAR_REGISTRO = "CLEAR_REGISTRO";

export const FETCH_REGISTROCATEGORIAS_SUCCESS =
  "FETCH_REGISTROCATEGORIAS_SUCCESS";
export const FETCH_REGISTROCATEGORIAS_ERROR = "FETCH_REGISTROCATEGORIAS_ERROR";

export const FETCH_REGISTROPUNTOS_SUCCESS = "FETCH_REGISTROPUNTOS_SUCCESS";
export const FETCH_REGISTROPUNTOS_ERROR = "FETCH_REGISTROPUNTOS_ERROR";

export const FETCH_REGISTROPRODUCTOS_SUCCESS =
  "FETCH_REGISTROPRODUCTOS_SUCCESS";
export const FETCH_REGISTROPRODUCTOS_ERROR = "FETCH_REGISTROPRODUCTOS_ERROR";

export const UPDATE_PUNTOS = "UPDATE_PUNTOS";

export const SINGLE_PUNTOS = "SINGLE_PUNTOS";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const VER_USUARIOS_SUCCESS = "VER_USUARIOS_SUCCESS";

export const VER_CATEGORIAS_SUCCESS = "VER_CATEGORIAS_SUCCESS";

export const VER_PRODUCTOS_SUCCESS = "VER_PRODUCTOS_SUCCESS";

export const SINGLE_PROVEEDOR = "SINGLE_PROVEEDOR";

export const VER_PRODUCTO_SUCCESS = "VER_PRODUCTO_SUCESS";

export const START_GET_PRODUCTO = "START_GET_PRODUCTO";

export const VER_PUNTOS_SUCCESS = "VER_PUNTOS_SUCCESS";

export const VER_PROFILE_SUCCESS = "VER_PROFILE_SUCCESS";

export const VER_PROFILE_ERROR = " VER_PROFILE_ERROR";

export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const TYPES = {
  LOGIN: "[auth] LOGIN",
  CHECKING: "[auth] CHECKING",
  LOGOUT: "[auth] LOGOUT",

  ADD_PRODUCT: "[shopping] ADD_PRODUCT",
  ADD_TO_CART: "[shopping] ADD_TO_CART",
  CLEAR_CART: "[shopping] CLEAR_CART",
  CLEAR_FILTER_PRODUCT: "[shopping] CLEAR_FILTER_PRODUCT",
  FILTER_PRODUCT: "[shopping] FILTER_PRODUCT",
  REMOVE_ONE_FROM_CART: "[shopping] REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART: "[shopping] REMOVE_ALL_FROM_CART",
  CREATE_ORDER: "[shopping] CREATE_ORDER",
  SUBMIT_ORDER: "[shopping] SUBMIT_ORDER",
  REMAINING: "[shopping] REMAINING",
  CLEAN_UP: "[shopping] CLEAN_UP",

  SHOW_STOCK: "[stock] SHOW_STOCK",
  ADD_SUPPLIER: "[stock] ADD_SUPPLIER",
  SUPPLIER_PRODUCTS: "[stock] SUPPLIER_PRODUCTS",
  PRODUCT_SELECTED: "[stock] PRODUCT_SELECTED",
  LOTE_SELECTED: "[stock] LOTE_SELECTED",
  CLEAN_UP_STOCK: "[stock] CLEAN_UP_STOCK",
  ASSIGN_STOCK: "[stock] ASSING_STOCK",
  START_SEARCH: "[stock] START_SEARCH",
  END_SEARCH: "[stock] END_SEARCH",
  ADD_FETCH_STOCK: "[stock] ADD_FETCH_STOCK",
  RELOADING: "[stock] RELOADING",

  ADD_STATS: "[stats] ADD_STATS",
};
