/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem('token'),
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
        token: localStorage.getItem('token')
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
