import {
  GET_USERS_LIST,
  GET_USER_DETAIL,
  POST_USER_CREATE,
  PUT_USER_EDIT,
  GET_USERS_PROV,
  GET_USERS_KOTA,
  GET_USERS_KECAMATAN,
} from "../actions/userAction";

let initialState = {
  getUsersList: false,
  errorUsersList: false,
  getUserDetail: false,
  errorUserDetail: false,
  getProvinsiList: false,
  errorProvinsiList: false,
  getResponDataUser: false,
  errorResponDataUser: false,
  getKotaList: false,
  errorKotaList: false,
  getKecamatanList: false,
  errorKecamatanList: false,
  title: "PT Kertas",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };

    case POST_USER_CREATE:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };

    case PUT_USER_EDIT:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };

    case GET_USERS_PROV:
      return {
        ...state,
        getProvinsiList: action.payload.data,
        errorProvinsiList: action.payload.errorMessage,
      };

    case GET_USERS_KOTA:
      return {
        ...state,
        getKotaList: action.payload.data,
        errorKotaList: action.payload.errorMessage,
      };

    case GET_USERS_KECAMATAN:
      return {
        ...state,
        getKecamatanList: action.payload.data,
        errorKecamatanList: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
