import axios from "axios";

export const POST_REGISTER_REQUEST = "POST_REGISTER_REQUEST";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAILURE = "POST_REGISTER_FAILURE";
const postRegisterRequest = () => {
  return {
    type: POST_REGISTER_REQUEST,
  };
};

const postRegisterSuccess = (data) => {
  return {
    type: POST_REGISTER_SUCCESS,
    payload: data,
  };
};

const postRegisterFailure = () => {
  return {
    type: POST_REGISTER_FAILURE,
  };
};

export const postRegister = (data) => (dispatch) => {
  console.log("data", data);
  dispatch(postRegisterRequest());
  return axios({
    method: "POST",
    url: " http://localhost:3004/data",
    data,
  })
    .then((res) => {
      dispatch(postRegisterSuccess(res.data));
      console.log(data);
    })
    .catch((error) => {
      dispatch(postRegisterFailure(error));
    });
};
