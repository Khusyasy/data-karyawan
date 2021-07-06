import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";
export const GET_USERS_PROV = "GET_USERS_PROV";
export const GET_USERS_KOTA = "GET_USERS_KOTA";
export const GET_USERS_KECAMATAN = "GET_USERS_KECAMATAN";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("https://reqaid.com/api/FakePosts")
      .then(function (response) {
        console.log(response);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUserDetail = (id, data) => {
  return (dispatch) => {
    axios
      .get("https://reqaid.com/api/FakePosts/" + id, data)
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post("https://reqaid.com/api/FakePosts", data)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const putUserUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put("https://reqaid.com/api/FakePosts/" + id, data)
      .then(function (response) {
        console.log(response);

        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const getProvinsiList = () => {
  return (dispatch) => {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then(function (response) {
        dispatch({
          type: GET_USERS_PROV,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_PROV,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getKotaList = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=" + id
      )
      .then(function (response) {
        dispatch({
          type: GET_USERS_KOTA,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_KOTA,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getKecamatanList = (id, data) => {
  return (dispatch) => {
    axios
      .get(
        "https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=" + id
      )
      .then(function (response) {
        dispatch({
          type: GET_USERS_KECAMATAN,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_KECAMATAN,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://reqaid.com/api/FakePosts/${id}`)
      .then(() => {
        return axios
          .get("https://reqaid.com/api/FakePosts/")
          .then(function (response) {
            dispatch({
              type: GET_USERS_LIST,
              payload: {
                data: response.data,
                errorMessage: false,
              },
            });
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_USER_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
