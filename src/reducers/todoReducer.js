import * as types from "../constants/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_TODO_REQUEST:
      return { ...state, loading: true };

    case types.LOAD_TODO_SUCCESS:
      return { ...state, loading: false, data: payload };

    case types.ADD_TODO_SUCCESS:
      return { ...state, loading: false, data: [payload, ...state.data] };

    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter(x => x.id !== payload)
      };

    case types.EDIT_TODO_SUCCESS: {
      const index = state.data.findIndex(x => x.id === payload.id);
      const data = [
        ...state.data.slice(0, index),
        payload,
        ...state.data.slice(index + 1)
      ];
      return {
        ...state,
        loading: false,
        data: data
      };
    }

    case types.LOAD_TODO_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
