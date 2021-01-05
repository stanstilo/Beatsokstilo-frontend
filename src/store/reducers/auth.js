import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: {},
  loading: false,
  isAuthenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        userId: action.payload,
        token: action.payload,
      };
    case actionTypes.AUTH_FAIL:
        return{
            ...state,
            error: action.payload
        }
     default:
      return state;
    }
};
