import {
  POST_REGISTER_FAILURE,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCCESS,
} from "./action";

const initState = {
  isError: false,
  isLoading: false,
  data: [],
  error: [],
};
export const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };

    case POST_REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};
